import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number;
  images: string[];
  alt: string;
  quantity: number;
  color: string; // Add color field
}

interface ShippingDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface OrderData {
  items: CartItem[];
  shippingDetails: ShippingDetails;
  subtotal: number;
  shippingFee: number;
  total: number;
  orderDate: string;
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json();

    // Create transporter - you'll need to configure this with your email provider
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate order ID
    const orderId = `CK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Format order items for email
    const itemsList = orderData.items
      .map(
        (item) =>
          `• ${item.name} (${item.color}) - ${item.quantity}x ${item.price.toFixed(2)}€ = ${(
            item.quantity * item.price
          ).toFixed(2)}€`
      )
      .join('\n');

    // Get country name for display
    const countryNames = {
      'kosova': 'Kosova',
      'shqiperi': 'Shqipëri',
      'maqedoni': 'Maqedoni e Veriut'
    };
    const countryName = countryNames[orderData.shippingDetails.country as keyof typeof countryNames] || orderData.shippingDetails.country;

    // Email content for shop owner
    const emailContent = `
POROSI E RE - ${orderId}

DETAJET E KLIENTIT:
Emri: ${orderData.shippingDetails.name}
Email: ${orderData.shippingDetails.email}
Telefoni: ${orderData.shippingDetails.phone}

ADRESA E DËRGIMIT:
${orderData.shippingDetails.address}
${orderData.shippingDetails.city}, ${orderData.shippingDetails.postalCode}
Shteti: ${countryName}

PRODUKTET:
${itemsList}

PËRSHKRIM I PAGESËS:
Subtotali: ${orderData.subtotal.toFixed(2)}€
Transporti: ${orderData.shippingFee.toFixed(2)}€
TOTALI: ${orderData.total.toFixed(2)}€

Data e porosisë: ${new Date(orderData.orderDate).toLocaleString('sq-AL')}

---
Maica Etnike - Sistemi i Porosive
    `;

    // Send email to shop owner
    const shopOwnerEmail = {
      from: process.env.SMTP_USER,
      to: process.env.SHOP_OWNER_EMAIL || 'maicaetnike@gmail.com',
      subject: `Porosi e re #${orderId} - ${orderData.shippingDetails.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            POROSI E RE - ${orderId}
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Detajet e klientit:</h3>
            <p><strong>Emri:</strong> ${orderData.shippingDetails.name}</p>
            <p><strong>Email:</strong> ${orderData.shippingDetails.email}</p>
            <p><strong>Telefoni:</strong> ${orderData.shippingDetails.phone}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Adresa e dërgimit:</h3>
            <p>${orderData.shippingDetails.address}<br>
            ${orderData.shippingDetails.city}, ${orderData.shippingDetails.postalCode}<br>
            <strong>Shteti:</strong> ${countryName}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Produktet e porositura:</h3>
            ${orderData.items
              .map(
                (item) => `
                <div style="border-bottom: 1px solid #ddd; padding: 10px 0;">
                  <strong>${item.name}</strong><br>
                  <span style="color: #666;">Ngjyra: ${item.color}</span><br>
                  Sasia: ${item.quantity} × ${item.price.toFixed(2)}€ = <strong>${(
                  item.quantity * item.price
                ).toFixed(2)}€</strong>
                </div>
              `
              )
              .join('')}
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Përshkrim i pagesës:</h3>
            <div style="border-bottom: 1px solid #ddd; padding: 10px 0; display: flex; justify-content: space-between;">
              <span>Subtotali:</span>
              <strong>${orderData.subtotal.toFixed(2)}€</strong>
            </div>
            <div style="border-bottom: 1px solid #ddd; padding: 10px 0; display: flex; justify-content: space-between;">
              <span>Transporti (${countryName}):</span>
              <strong>${orderData.shippingFee.toFixed(2)}€</strong>
            </div>
          </div>

          <div style="background-color: #4F46E5; color: white; padding: 20px; text-align: center; border-radius: 8px;">
            <h3 style="margin: 0;">TOTALI: ${orderData.total.toFixed(2)}€</h3>
          </div>

          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            Data e porosisë: ${new Date(orderData.orderDate).toLocaleString('sq-AL')}
          </p>

          <hr style="margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            Maica Etnike - Sistemi i Porosive
          </p>
        </div>
      `,
    };

    // Send confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: orderData.shippingDetails.email,
      subject: `Konfirmimi i porosisë #${orderId} - Maica Etnike`,
      text: `
Përshëndetje ${orderData.shippingDetails.name},

Faleminderit për porosinë tuaj në Maica Etnike!

Numri i porosisë: ${orderId}
Shteti i dërgimit: ${countryName}

Produktet e porositura:
${itemsList}

Përshkrim i pagesës:
Subtotali: ${orderData.subtotal.toFixed(2)}€
Transporti: ${orderData.shippingFee.toFixed(2)}€
TOTALI: ${orderData.total.toFixed(2)}€

Do të kontaktoheni së shpejti për konfirmimin dhe detajet e dërgimit.

Faleminderit,
Maica Etnike
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Faleminderit për porosinë tuaj!</h2>
          
          <p>Përshëndetje <strong>${orderData.shippingDetails.name}</strong>,</p>
          
          <p>Porosia juaj është regjistruar me sukses në Maica Etnike.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Detajet e porosisë:</h3>
            <p><strong>Numri i porosisë:</strong> ${orderId}</p>
            <p><strong>Shteti i dërgimit:</strong> ${countryName}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Produktet e porositura:</h3>
            ${orderData.items
              .map(
                (item) => `
                <div style="border-bottom: 1px solid #ddd; padding: 10px 0;">
                  <strong>${item.name}</strong><br>
                  <span style="color: #666;">Ngjyra: ${item.color}</span><br>
                  Sasia: ${item.quantity} × ${item.price.toFixed(2)}€ = <strong>${(
                  item.quantity * item.price
                ).toFixed(2)}€</strong>
                </div>
              `
              )
              .join('')}
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #4F46E5; margin-top: 0;">Përshkrim i pagesës:</h3>
            <div style="border-bottom: 1px solid #ddd; padding: 10px 0; display: flex; justify-content: space-between;">
              <span>Subtotali:</span>
              <strong>${orderData.subtotal.toFixed(2)}€</strong>
            </div>
            <div style="border-bottom: 1px solid #ddd; padding: 10px 0; display: flex; justify-content: space-between;">
              <span>Transporti (${countryName}):</span>
              <strong>${orderData.shippingFee.toFixed(2)}€</strong>
            </div>
            <div style="padding: 10px 0; display: flex; justify-content: space-between; font-size: 18px;">
              <span><strong>TOTALI:</strong></span>
              <strong style="color: #4F46E5;">${orderData.total.toFixed(2)}€</strong>
            </div>
          </div>

          <p>Do të kontaktoheni së shpejti për konfirmimin dhe detajet e dërgimit.</p>
          
          <p>Faleminderit që zgjodhët Maica Etnike!</p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            Maica Etnike - www.maicaetnike.com
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(shopOwnerEmail),
      transporter.sendMail(customerEmail),
    ]);

    return NextResponse.json({
      success: true,
      orderId,
      message: 'Porosia u dërgua me sukses!',
    });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Ka ndodhur një gabim gjatë procesimit të porosisë.',
      },
      { status: 500 }
    );
  }
} 