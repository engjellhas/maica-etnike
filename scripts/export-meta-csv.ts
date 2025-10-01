#!/usr/bin/env tsx

/**
 * TypeScript script to export products as CSV for Meta (Facebook) catalog
 * Run with: npx tsx scripts/export-meta-csv.ts
 * or: npm run export:meta
 */

import fs from 'fs';
import path from 'path';
import { exportProductsAsCSV, exportProductsForMeta } from '../utilies/product';

async function exportMetaCSV() {
  try {
    console.log('🔄 Generating Meta CSV catalog...');
    
    // Get the CSV data
    const csvData = exportProductsAsCSV();
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), 'exports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write CSV file
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `meta-catalog-${timestamp}.csv`;
    const filepath = path.join(outputDir, filename);
    
    fs.writeFileSync(filepath, csvData, 'utf8');
    
    console.log(`✅ Meta CSV catalog exported successfully!`);
    console.log(`📁 File saved to: ${filepath}`);
    console.log(`📊 Total products: ${exportProductsForMeta().length}`);
    
    // Also create a JSON version for reference
    const jsonFilename = `meta-catalog-${timestamp}.json`;
    const jsonFilepath = path.join(outputDir, jsonFilename);
    fs.writeFileSync(jsonFilepath, JSON.stringify(exportProductsForMeta(), null, 2), 'utf8');
    
    console.log(`📄 JSON version also saved to: ${jsonFilepath}`);
    
    // Show sample of the data
    console.log('\n📋 Sample product data:');
    const sampleProduct = exportProductsForMeta()[0];
    console.log(JSON.stringify(sampleProduct, null, 2));
    
  } catch (error) {
    console.error('❌ Error exporting Meta CSV:', error);
    process.exit(1);
  }
}

// Run the export
exportMetaCSV();
