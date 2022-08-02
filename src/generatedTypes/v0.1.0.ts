/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Semantic versioning of document
 */
export type Version = string;
/**
 * The code identifying the CLI, UI, service generating the order.
 */
export type AppCode = string;
export type ReferrerAddress = string;

/**
 * Metadata JSON document for adding information to orders.
 */
export interface AppDataRootSchema {
  version: Version;
  appCode?: AppCode;
  metadata: Metadata;
  [k: string]: unknown;
}
/**
 * Each metadata will specify one aspect of the order.
 */
export interface Metadata {
  referrer?: Referrer;
  [k: string]: unknown;
}
export interface Referrer {
  version: Version;
  address: ReferrerAddress;
  [k: string]: unknown;
}