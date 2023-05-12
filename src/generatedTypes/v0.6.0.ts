/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Semantic versioning of document.
 */
export type Version = string;
/**
 * The code identifying the CLI, UI, service generating the order.
 */
export type AppCode = string;
/**
 * Environment from which the order came from.
 */
export type Environment = string;
/**
 * Semantic versioning of document.
 */
export type Version1 = string;
export type ReferrerAddress = string;
/**
 * Tracks in which medium the traffic originated from (twitter, facebook, etc.)
 */
export type UTMSource = string;
/**
 * Tracks in which medium the traffic originated from (mail, CPC, social, etc.)
 */
export type UTMMedium = string;
/**
 * Track the performance of a specific campaign
 */
export type UTMCampaign = string;
/**
 * Track which link was clicked
 */
export type UTMContent = string;
/**
 * Track which keyword term a website visitor came from
 */
export type UTMKeywordTerm = string;
/**
 * Semantic versioning of document.
 */
export type Version2 = string;
/**
 * Slippage tolerance that was applied to the order to get the limit price. Expressed in Basis Points (BIPS)
 */
export type SlippageBips = string;
/**
 * Semantic versioning of document.
 */
export type Version3 = string;
/**
 * Indicator of the order class.
 */
export type OrderClass1 = "market" | "limit" | "liquidity";

/**
 * Metadata JSON document for adding information to orders.
 */
export interface AppDataRootSchema {
  version: Version;
  appCode?: AppCode;
  environment?: Environment;
  metadata: Metadata;
  [k: string]: unknown;
}
/**
 * Each metadata will specify one aspect of the order.
 */
export interface Metadata {
  referrer?: Referrer;
  utm?: UTMCodes;
  quote?: Quote;
  orderClass?: OrderClass;
  [k: string]: unknown;
}
export interface Referrer {
  version: Version1;
  address: ReferrerAddress;
  [k: string]: unknown;
}
export interface UTMCodes {
  utm_source?: UTMSource;
  utm_medium?: UTMMedium;
  utm_campaign?: UTMCampaign;
  utm_content?: UTMContent;
  utm_term?: UTMKeywordTerm;
  [k: string]: unknown;
}
export interface Quote {
  version: Version2;
  slippageBips: SlippageBips;
  [k: string]: unknown;
}
export interface OrderClass {
  version: Version3;
  orderClass: OrderClass1;
  [k: string]: unknown;
}
