import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (€)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'comparePrice',
      title: 'Compare Price (€)',
      type: 'number',
      description: 'Original price if item is on sale',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for images (for SEO and accessibility)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content_id',
      title: 'Content ID',
      type: 'string',
      description: 'Unique identifier for Facebook/Meta tracking',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in stock' },
          { title: 'Out of Stock', value: 'out of stock' },
          { title: 'Preorder', value: 'preorder' },
        ],
        layout: 'radio',
      },
      initialValue: 'in stock',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Used', value: 'used' },
          { title: 'Refurbished', value: 'refurbished' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      initialValue: 'MaicaEtnike',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleProductCategory',
      title: 'Google Product Category',
      type: 'string',
      description: 'Google product category for shopping feeds (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      subtitle: 'price',
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title,
        subtitle: subtitle ? `€${subtitle}` : 'No price set',
        media,
      }
    },
  },
})
