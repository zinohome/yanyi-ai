import type { CollectionConfig } from 'payload'
import { slugField, statusField, orderField, publicRead } from '../fields/slug'
import { seoField } from '../fields/seo'
import { iconField } from '../fields/link'

// 内部 slug 沿用 'products'，对外呈现为「产品 Products」（工业AI）
export const Products: CollectionConfig = {
  slug: 'products',
  labels: { singular: '产品', plural: '产品 Products' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'scenario', 'order', 'status'] },
  access: publicRead,
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    slugField(),
    { name: 'tagline', type: 'text', localized: true, admin: { description: '一句话标题' } },
    iconField(),
    {
      name: 'scenario',
      type: 'select',
      label: '产品分类',
      options: [
        { label: '智能生产力底座', value: 'platform' },
        { label: '智能体大脑', value: 'brain' },
        { label: '记忆平台', value: 'memory' },
        { label: '语音底座', value: 'voice' },
        { label: '视觉平台', value: 'vision' },
      ],
    },
    { name: 'summary', type: 'textarea', localized: true, admin: { description: '简介（卡片/列表用，一句话）' } },
    { name: 'overview', type: 'textarea', localized: true, admin: { description: '概述（详情页开篇，2-3 句）' } },
    {
      name: 'problem',
      type: 'textarea',
      localized: true,
      admin: { description: '挑战背景（详情页痛点段落）' },
    },
    {
      name: 'painPoints',
      type: 'array',
      label: '痛点',
      fields: [{ name: 'value', type: 'text', localized: true }],
    },
    {
      name: 'workflow',
      type: 'array',
      label: '方案闭环（按顺序）',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'text', localized: true },
      ],
    },
    {
      name: 'audience',
      type: 'array',
      label: '适用对象',
      fields: [{ name: 'value', type: 'text', localized: true }],
    },
    {
      name: 'features',
      type: 'array',
      label: '核心功能',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      label: '价值 / 成效',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'text', localized: true },
      ],
    },
    { name: 'cover', type: 'upload', relationTo: 'media' },
    { name: 'gallery', type: 'upload', relationTo: 'media', hasMany: true },
    orderField(),
    statusField(),
    seoField(),
  ],
}
