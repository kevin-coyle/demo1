import { html } from 'lit';
import './hero';

export default {
  title: 'Molecules/Blocks/Hero',
  component: 'fusion-hero'
};

export const Default = (args) => html`
  <fusion-hero imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignTopLeft = (args) => html`
  <fusion-hero align="top-left" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignLeft = (args) => html`
  <fusion-hero align="left" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignTopCenter = (args) => html`
  <fusion-hero align="top-center" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignCenter = (args) => html`
  <fusion-hero align="center" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignBottomCenter = (args) => html`
  <fusion-hero align="bottom-center" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignTopRight = (args) => html`
  <fusion-hero align="top-right" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignRight = (args) => html`
  <fusion-hero align="right" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;

export const AlignBottomRight = (args) => html`
  <fusion-hero align="bottom-right" imgSrc="https://via.placeholder.com/1200x650" imgAlt="Hero Alt Text">
    <fusion-heading tagName="h2">Hero title</fusion-heading>
    <fusion-text-passage>This is the hero description</fusion-text-passage>
  </fusion-hero>
`;
