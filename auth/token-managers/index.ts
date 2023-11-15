/**
 * (C) Copyright IBM Corp. 2019, 2023.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module token-managers
 * The ibm-cloud-sdk-core module supports the following types of token authentication:
 *
 * Identity and Access Management (IAM)
 * Cloud Pak for Data
 * Container (IKS, etc)
 * VPC Instance
 * Multi-Cloud Saas Platform (MCSP)
 *
 * The token managers sit inside of an authenticator and do the work to retrieve
 * tokens, whereas the authenticators add these tokens to the actual request.
 *
 * classes:
 *   IamTokenManager: Token Manager of IAM via apikey.
 *   Cp4dTokenManager: Token Manager of CloudPak for data.
 *   ContainerTokenManager: Token manager of IAM via compute resource token.
 *   VpcInstanceTokenManager: Token manager of VPC Instance Metadata Service API tokens.
 *   McspTokenManager: Token Manager of MCSP via apikey.
 *   JwtTokenManager: A class for shared functionality for parsing, storing, and requesting JWT tokens.
 */

export { IamTokenManager } from './iam-token-manager';
export { Cp4dTokenManager } from './cp4d-token-manager';
export { ContainerTokenManager } from './container-token-manager';
export { IamRequestBasedTokenManager, IamRequestOptions } from './iam-request-based-token-manager';
export { JwtTokenManager, JwtTokenManagerOptions } from './jwt-token-manager';
export { TokenManager, TokenManagerOptions } from './token-manager';
export { VpcInstanceTokenManager } from './vpc-instance-token-manager';
export { McspTokenManager } from './mcsp-token-manager';
