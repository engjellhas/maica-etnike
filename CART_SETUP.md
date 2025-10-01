# Cart System Setup Guide

## Overview
This cart system allows customers to:
- Add multiple products to their cart
- View and manage cart items
- Fill out shipping details (Kosovo only)
- Submit orders (no payment integration)
- Receive email confirmations

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration for Order System
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SHOP_OWNER_EMAIL=shop@maicaetnike.shop 
```

### 2. Email Provider Setup

#### For Gmail:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings > Security > App passwords
3. Generate an app password for "Mail"
4. Use this app password as `SMTP_PASS`

#### For other providers:
- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom domain**: Check with your hosting provider

### 3. Files Created

#### Components:
- `contexts/CartContext.tsx` - Cart state management
- `components/cart/CartIcon.tsx` - Cart icon with item count
- `components/cart/CartDrawer.tsx` - Slide-out cart panel
- `components/cart/AddToCartButton.tsx` - Add to cart button
- `app/cart/page.tsx` - Full cart page with checkout
- `app/api/submit-order/route.ts` - Order submission API

#### Updated Files:
- `app/layout.tsx` - Added cart provider and drawer
- `components/header.tsx` - Added cart icon
- `app/product/page.tsx` - Added cart buttons

### 4. Features

#### Cart Management:
- Add products to cart
- Update quantities
- Remove items
- Persistent storage (localStorage)

#### Checkout Process:
- Kosovo postal code validation
- Required shipping fields
- Order confirmation emails
- Shop owner notifications

#### Email Templates:
- Customer confirmation email
- Shop owner order notification
- Albanian language support

### 5. Postal Code Validation
The system validates Kosovo postal codes (10000-79999 range).

### 6. Order Flow
1. Customer adds products to cart
2. Customer goes to cart page (`/cart`)
3. Customer fills shipping details
4. System validates Kosovo postal code
5. Order is submitted to API
6. Emails are sent to both customer and shop owner
7. Cart is cleared and success message shown

### 8. Customization
You can customize:
- Email templates in `app/api/submit-order/route.ts`
- Postal code validation in `app/cart/page.tsx`
- Styling throughout the components
- Order ID format

### 9. Testing
To test the system:
1. Set up email configuration
2. Add products to cart
3. Go through checkout process
4. Check email delivery

## Notes
- No payment processing is included
- Orders are sent via email only
- Cart data persists in browser localStorage
- System is designed for Kosovo shipping only 