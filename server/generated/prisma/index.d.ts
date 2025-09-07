
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Companies
 * 
 */
export type Companies = $Result.DefaultSelection<Prisma.$CompaniesPayload>
/**
 * Model HRContacts
 * 
 */
export type HRContacts = $Result.DefaultSelection<Prisma.$HRContactsPayload>
/**
 * Model JobApplications
 * 
 */
export type JobApplications = $Result.DefaultSelection<Prisma.$JobApplicationsPayload>
/**
 * Model InterviewSteps
 * 
 */
export type InterviewSteps = $Result.DefaultSelection<Prisma.$InterviewStepsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ApplicationStatus: {
  APPLIED: 'APPLIED',
  IN_PROGRESS: 'IN_PROGRESS',
  OFFER: 'OFFER',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const StepStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus]

}

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type StepStatus = $Enums.StepStatus

export const StepStatus: typeof $Enums.StepStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.companies.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.companies.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.companies`: Exposes CRUD operations for the **Companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.CompaniesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hRContacts`: Exposes CRUD operations for the **HRContacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HRContacts
    * const hRContacts = await prisma.hRContacts.findMany()
    * ```
    */
  get hRContacts(): Prisma.HRContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplications`: Exposes CRUD operations for the **JobApplications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplications.findMany()
    * ```
    */
  get jobApplications(): Prisma.JobApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewSteps`: Exposes CRUD operations for the **InterviewSteps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewSteps
    * const interviewSteps = await prisma.interviewSteps.findMany()
    * ```
    */
  get interviewSteps(): Prisma.InterviewStepsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Companies: 'Companies',
    HRContacts: 'HRContacts',
    JobApplications: 'JobApplications',
    InterviewSteps: 'InterviewSteps',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "companies" | "hRContacts" | "jobApplications" | "interviewSteps" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Companies: {
        payload: Prisma.$CompaniesPayload<ExtArgs>
        fields: Prisma.CompaniesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompaniesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompaniesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findFirst: {
            args: Prisma.CompaniesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompaniesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findMany: {
            args: Prisma.CompaniesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          create: {
            args: Prisma.CompaniesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          createMany: {
            args: Prisma.CompaniesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompaniesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          delete: {
            args: Prisma.CompaniesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          update: {
            args: Prisma.CompaniesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          deleteMany: {
            args: Prisma.CompaniesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompaniesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompaniesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          upsert: {
            args: Prisma.CompaniesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.CompaniesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompaniesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      HRContacts: {
        payload: Prisma.$HRContactsPayload<ExtArgs>
        fields: Prisma.HRContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HRContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HRContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>
          }
          findFirst: {
            args: Prisma.HRContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HRContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>
          }
          findMany: {
            args: Prisma.HRContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>[]
          }
          create: {
            args: Prisma.HRContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>
          }
          createMany: {
            args: Prisma.HRContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HRContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>[]
          }
          delete: {
            args: Prisma.HRContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>
          }
          update: {
            args: Prisma.HRContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>
          }
          deleteMany: {
            args: Prisma.HRContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HRContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HRContactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>[]
          }
          upsert: {
            args: Prisma.HRContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HRContactsPayload>
          }
          aggregate: {
            args: Prisma.HRContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHRContacts>
          }
          groupBy: {
            args: Prisma.HRContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HRContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HRContactsCountArgs<ExtArgs>
            result: $Utils.Optional<HRContactsCountAggregateOutputType> | number
          }
        }
      }
      JobApplications: {
        payload: Prisma.$JobApplicationsPayload<ExtArgs>
        fields: Prisma.JobApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>
          }
          findMany: {
            args: Prisma.JobApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>[]
          }
          create: {
            args: Prisma.JobApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>
          }
          createMany: {
            args: Prisma.JobApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>
          }
          update: {
            args: Prisma.JobApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationsPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplications>
          }
          groupBy: {
            args: Prisma.JobApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationsCountAggregateOutputType> | number
          }
        }
      }
      InterviewSteps: {
        payload: Prisma.$InterviewStepsPayload<ExtArgs>
        fields: Prisma.InterviewStepsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewStepsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewStepsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>
          }
          findFirst: {
            args: Prisma.InterviewStepsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewStepsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>
          }
          findMany: {
            args: Prisma.InterviewStepsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>[]
          }
          create: {
            args: Prisma.InterviewStepsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>
          }
          createMany: {
            args: Prisma.InterviewStepsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewStepsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>[]
          }
          delete: {
            args: Prisma.InterviewStepsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>
          }
          update: {
            args: Prisma.InterviewStepsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>
          }
          deleteMany: {
            args: Prisma.InterviewStepsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewStepsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewStepsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>[]
          }
          upsert: {
            args: Prisma.InterviewStepsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewStepsPayload>
          }
          aggregate: {
            args: Prisma.InterviewStepsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewSteps>
          }
          groupBy: {
            args: Prisma.InterviewStepsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewStepsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewStepsCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewStepsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    companies?: CompaniesOmit
    hRContacts?: HRContactsOmit
    jobApplications?: JobApplicationsOmit
    interviewSteps?: InterviewStepsOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    jobs: number
    contacts: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | CompaniesCountOutputTypeCountJobsArgs
    contacts?: boolean | CompaniesCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationsWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HRContactsWhereInput
  }


  /**
   * Count Type HRContactsCountOutputType
   */

  export type HRContactsCountOutputType = {
    jobs: number
    steps: number
  }

  export type HRContactsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | HRContactsCountOutputTypeCountJobsArgs
    steps?: boolean | HRContactsCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * HRContactsCountOutputType without action
   */
  export type HRContactsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContactsCountOutputType
     */
    select?: HRContactsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HRContactsCountOutputType without action
   */
  export type HRContactsCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationsWhereInput
  }

  /**
   * HRContactsCountOutputType without action
   */
  export type HRContactsCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewStepsWhereInput
  }


  /**
   * Count Type JobApplicationsCountOutputType
   */

  export type JobApplicationsCountOutputType = {
    steps: number
    hrContacts: number
  }

  export type JobApplicationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | JobApplicationsCountOutputTypeCountStepsArgs
    hrContacts?: boolean | JobApplicationsCountOutputTypeCountHrContactsArgs
  }

  // Custom InputTypes
  /**
   * JobApplicationsCountOutputType without action
   */
  export type JobApplicationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationsCountOutputType
     */
    select?: JobApplicationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobApplicationsCountOutputType without action
   */
  export type JobApplicationsCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewStepsWhereInput
  }

  /**
   * JobApplicationsCountOutputType without action
   */
  export type JobApplicationsCountOutputTypeCountHrContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HRContactsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    website: string | null
    industry: string | null
    size: string | null
    logo: string | null
    createdAt: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    website: string | null
    industry: string | null
    size: string | null
    logo: string | null
    createdAt: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    location: number
    website: number
    industry: number
    size: number
    logo: number
    createdAt: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    website?: true
    industry?: true
    size?: true
    logo?: true
    createdAt?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    website?: true
    industry?: true
    size?: true
    logo?: true
    createdAt?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    website?: true
    industry?: true
    size?: true
    logo?: true
    createdAt?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to aggregate.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type CompaniesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompaniesWhereInput
    orderBy?: CompaniesOrderByWithAggregationInput | CompaniesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: CompaniesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    name: string
    location: string | null
    website: string | null
    industry: string | null
    size: string | null
    logo: string | null
    createdAt: Date
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type CompaniesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    website?: boolean
    industry?: boolean
    size?: boolean
    logo?: boolean
    createdAt?: boolean
    jobs?: boolean | Companies$jobsArgs<ExtArgs>
    contacts?: boolean | Companies$contactsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    website?: boolean
    industry?: boolean
    size?: boolean
    logo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    website?: boolean
    industry?: boolean
    size?: boolean
    logo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    website?: boolean
    industry?: boolean
    size?: boolean
    logo?: boolean
    createdAt?: boolean
  }

  export type CompaniesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "website" | "industry" | "size" | "logo" | "createdAt", ExtArgs["result"]["companies"]>
  export type CompaniesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Companies$jobsArgs<ExtArgs>
    contacts?: boolean | Companies$contactsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompaniesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompaniesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompaniesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companies"
    objects: {
      jobs: Prisma.$JobApplicationsPayload<ExtArgs>[]
      contacts: Prisma.$HRContactsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
      website: string | null
      industry: string | null
      size: string | null
      logo: string | null
      createdAt: Date
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type CompaniesGetPayload<S extends boolean | null | undefined | CompaniesDefaultArgs> = $Result.GetResult<Prisma.$CompaniesPayload, S>

  type CompaniesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompaniesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface CompaniesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companies'], meta: { name: 'Companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {CompaniesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompaniesFindUniqueArgs>(args: SelectSubset<T, CompaniesFindUniqueArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompaniesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompaniesFindUniqueOrThrowArgs>(args: SelectSubset<T, CompaniesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompaniesFindFirstArgs>(args?: SelectSubset<T, CompaniesFindFirstArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompaniesFindFirstOrThrowArgs>(args?: SelectSubset<T, CompaniesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompaniesFindManyArgs>(args?: SelectSubset<T, CompaniesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {CompaniesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends CompaniesCreateArgs>(args: SelectSubset<T, CompaniesCreateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompaniesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompaniesCreateManyArgs>(args?: SelectSubset<T, CompaniesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompaniesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompaniesCreateManyAndReturnArgs>(args?: SelectSubset<T, CompaniesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {CompaniesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends CompaniesDeleteArgs>(args: SelectSubset<T, CompaniesDeleteArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {CompaniesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompaniesUpdateArgs>(args: SelectSubset<T, CompaniesUpdateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompaniesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompaniesDeleteManyArgs>(args?: SelectSubset<T, CompaniesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompaniesUpdateManyArgs>(args: SelectSubset<T, CompaniesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompaniesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompaniesUpdateManyAndReturnArgs>(args: SelectSubset<T, CompaniesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {CompaniesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends CompaniesUpsertArgs>(args: SelectSubset<T, CompaniesUpsertArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompaniesCountArgs>(
      args?: Subset<T, CompaniesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companies model
   */
  readonly fields: CompaniesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompaniesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Companies$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Companies$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends Companies$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Companies$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Companies model
   */
  interface CompaniesFieldRefs {
    readonly id: FieldRef<"Companies", 'String'>
    readonly name: FieldRef<"Companies", 'String'>
    readonly location: FieldRef<"Companies", 'String'>
    readonly website: FieldRef<"Companies", 'String'>
    readonly industry: FieldRef<"Companies", 'String'>
    readonly size: FieldRef<"Companies", 'String'>
    readonly logo: FieldRef<"Companies", 'String'>
    readonly createdAt: FieldRef<"Companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Companies findUnique
   */
  export type CompaniesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findUniqueOrThrow
   */
  export type CompaniesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findFirst
   */
  export type CompaniesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findFirstOrThrow
   */
  export type CompaniesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findMany
   */
  export type CompaniesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies create
   */
  export type CompaniesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to create a Companies.
     */
    data: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
  }

  /**
   * Companies createMany
   */
  export type CompaniesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companies createManyAndReturn
   */
  export type CompaniesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companies update
   */
  export type CompaniesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to update a Companies.
     */
    data: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
    /**
     * Choose, which Companies to update.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies updateMany
   */
  export type CompaniesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Companies updateManyAndReturn
   */
  export type CompaniesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Companies upsert
   */
  export type CompaniesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The filter to search for the Companies to update in case it exists.
     */
    where: CompaniesWhereUniqueInput
    /**
     * In case the Companies found by the `where` argument doesn't exist, create a new Companies with this data.
     */
    create: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
    /**
     * In case the Companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
  }

  /**
   * Companies delete
   */
  export type CompaniesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter which Companies to delete.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies deleteMany
   */
  export type CompaniesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Companies.jobs
   */
  export type Companies$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    where?: JobApplicationsWhereInput
    orderBy?: JobApplicationsOrderByWithRelationInput | JobApplicationsOrderByWithRelationInput[]
    cursor?: JobApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationsScalarFieldEnum | JobApplicationsScalarFieldEnum[]
  }

  /**
   * Companies.contacts
   */
  export type Companies$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    where?: HRContactsWhereInput
    orderBy?: HRContactsOrderByWithRelationInput | HRContactsOrderByWithRelationInput[]
    cursor?: HRContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HRContactsScalarFieldEnum | HRContactsScalarFieldEnum[]
  }

  /**
   * Companies without action
   */
  export type CompaniesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
  }


  /**
   * Model HRContacts
   */

  export type AggregateHRContacts = {
    _count: HRContactsCountAggregateOutputType | null
    _min: HRContactsMinAggregateOutputType | null
    _max: HRContactsMaxAggregateOutputType | null
  }

  export type HRContactsMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    notes: string | null
    linkedin: string | null
    createdAt: Date | null
  }

  export type HRContactsMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    notes: string | null
    linkedin: string | null
    createdAt: Date | null
  }

  export type HRContactsCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    email: number
    phone: number
    role: number
    notes: number
    linkedin: number
    createdAt: number
    _all: number
  }


  export type HRContactsMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    notes?: true
    linkedin?: true
    createdAt?: true
  }

  export type HRContactsMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    notes?: true
    linkedin?: true
    createdAt?: true
  }

  export type HRContactsCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    notes?: true
    linkedin?: true
    createdAt?: true
    _all?: true
  }

  export type HRContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HRContacts to aggregate.
     */
    where?: HRContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRContacts to fetch.
     */
    orderBy?: HRContactsOrderByWithRelationInput | HRContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HRContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HRContacts
    **/
    _count?: true | HRContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HRContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HRContactsMaxAggregateInputType
  }

  export type GetHRContactsAggregateType<T extends HRContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateHRContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHRContacts[P]>
      : GetScalarType<T[P], AggregateHRContacts[P]>
  }




  export type HRContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HRContactsWhereInput
    orderBy?: HRContactsOrderByWithAggregationInput | HRContactsOrderByWithAggregationInput[]
    by: HRContactsScalarFieldEnum[] | HRContactsScalarFieldEnum
    having?: HRContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HRContactsCountAggregateInputType | true
    _min?: HRContactsMinAggregateInputType
    _max?: HRContactsMaxAggregateInputType
  }

  export type HRContactsGroupByOutputType = {
    id: string
    companyId: string
    name: string
    email: string | null
    phone: string | null
    role: string | null
    notes: string | null
    linkedin: string | null
    createdAt: Date
    _count: HRContactsCountAggregateOutputType | null
    _min: HRContactsMinAggregateOutputType | null
    _max: HRContactsMaxAggregateOutputType | null
  }

  type GetHRContactsGroupByPayload<T extends HRContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HRContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HRContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HRContactsGroupByOutputType[P]>
            : GetScalarType<T[P], HRContactsGroupByOutputType[P]>
        }
      >
    >


  export type HRContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    notes?: boolean
    linkedin?: boolean
    createdAt?: boolean
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
    jobs?: boolean | HRContacts$jobsArgs<ExtArgs>
    steps?: boolean | HRContacts$stepsArgs<ExtArgs>
    _count?: boolean | HRContactsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hRContacts"]>

  export type HRContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    notes?: boolean
    linkedin?: boolean
    createdAt?: boolean
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hRContacts"]>

  export type HRContactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    notes?: boolean
    linkedin?: boolean
    createdAt?: boolean
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hRContacts"]>

  export type HRContactsSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    notes?: boolean
    linkedin?: boolean
    createdAt?: boolean
  }

  export type HRContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "email" | "phone" | "role" | "notes" | "linkedin" | "createdAt", ExtArgs["result"]["hRContacts"]>
  export type HRContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
    jobs?: boolean | HRContacts$jobsArgs<ExtArgs>
    steps?: boolean | HRContacts$stepsArgs<ExtArgs>
    _count?: boolean | HRContactsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HRContactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }
  export type HRContactsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }

  export type $HRContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HRContacts"
    objects: {
      company: Prisma.$CompaniesPayload<ExtArgs>
      jobs: Prisma.$JobApplicationsPayload<ExtArgs>[]
      steps: Prisma.$InterviewStepsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      name: string
      email: string | null
      phone: string | null
      role: string | null
      notes: string | null
      linkedin: string | null
      createdAt: Date
    }, ExtArgs["result"]["hRContacts"]>
    composites: {}
  }

  type HRContactsGetPayload<S extends boolean | null | undefined | HRContactsDefaultArgs> = $Result.GetResult<Prisma.$HRContactsPayload, S>

  type HRContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HRContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HRContactsCountAggregateInputType | true
    }

  export interface HRContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HRContacts'], meta: { name: 'HRContacts' } }
    /**
     * Find zero or one HRContacts that matches the filter.
     * @param {HRContactsFindUniqueArgs} args - Arguments to find a HRContacts
     * @example
     * // Get one HRContacts
     * const hRContacts = await prisma.hRContacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HRContactsFindUniqueArgs>(args: SelectSubset<T, HRContactsFindUniqueArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HRContacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HRContactsFindUniqueOrThrowArgs} args - Arguments to find a HRContacts
     * @example
     * // Get one HRContacts
     * const hRContacts = await prisma.hRContacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HRContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, HRContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HRContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsFindFirstArgs} args - Arguments to find a HRContacts
     * @example
     * // Get one HRContacts
     * const hRContacts = await prisma.hRContacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HRContactsFindFirstArgs>(args?: SelectSubset<T, HRContactsFindFirstArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HRContacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsFindFirstOrThrowArgs} args - Arguments to find a HRContacts
     * @example
     * // Get one HRContacts
     * const hRContacts = await prisma.hRContacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HRContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, HRContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HRContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HRContacts
     * const hRContacts = await prisma.hRContacts.findMany()
     * 
     * // Get first 10 HRContacts
     * const hRContacts = await prisma.hRContacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hRContactsWithIdOnly = await prisma.hRContacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HRContactsFindManyArgs>(args?: SelectSubset<T, HRContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HRContacts.
     * @param {HRContactsCreateArgs} args - Arguments to create a HRContacts.
     * @example
     * // Create one HRContacts
     * const HRContacts = await prisma.hRContacts.create({
     *   data: {
     *     // ... data to create a HRContacts
     *   }
     * })
     * 
     */
    create<T extends HRContactsCreateArgs>(args: SelectSubset<T, HRContactsCreateArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HRContacts.
     * @param {HRContactsCreateManyArgs} args - Arguments to create many HRContacts.
     * @example
     * // Create many HRContacts
     * const hRContacts = await prisma.hRContacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HRContactsCreateManyArgs>(args?: SelectSubset<T, HRContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HRContacts and returns the data saved in the database.
     * @param {HRContactsCreateManyAndReturnArgs} args - Arguments to create many HRContacts.
     * @example
     * // Create many HRContacts
     * const hRContacts = await prisma.hRContacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HRContacts and only return the `id`
     * const hRContactsWithIdOnly = await prisma.hRContacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HRContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, HRContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HRContacts.
     * @param {HRContactsDeleteArgs} args - Arguments to delete one HRContacts.
     * @example
     * // Delete one HRContacts
     * const HRContacts = await prisma.hRContacts.delete({
     *   where: {
     *     // ... filter to delete one HRContacts
     *   }
     * })
     * 
     */
    delete<T extends HRContactsDeleteArgs>(args: SelectSubset<T, HRContactsDeleteArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HRContacts.
     * @param {HRContactsUpdateArgs} args - Arguments to update one HRContacts.
     * @example
     * // Update one HRContacts
     * const hRContacts = await prisma.hRContacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HRContactsUpdateArgs>(args: SelectSubset<T, HRContactsUpdateArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HRContacts.
     * @param {HRContactsDeleteManyArgs} args - Arguments to filter HRContacts to delete.
     * @example
     * // Delete a few HRContacts
     * const { count } = await prisma.hRContacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HRContactsDeleteManyArgs>(args?: SelectSubset<T, HRContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HRContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HRContacts
     * const hRContacts = await prisma.hRContacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HRContactsUpdateManyArgs>(args: SelectSubset<T, HRContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HRContacts and returns the data updated in the database.
     * @param {HRContactsUpdateManyAndReturnArgs} args - Arguments to update many HRContacts.
     * @example
     * // Update many HRContacts
     * const hRContacts = await prisma.hRContacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HRContacts and only return the `id`
     * const hRContactsWithIdOnly = await prisma.hRContacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HRContactsUpdateManyAndReturnArgs>(args: SelectSubset<T, HRContactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HRContacts.
     * @param {HRContactsUpsertArgs} args - Arguments to update or create a HRContacts.
     * @example
     * // Update or create a HRContacts
     * const hRContacts = await prisma.hRContacts.upsert({
     *   create: {
     *     // ... data to create a HRContacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HRContacts we want to update
     *   }
     * })
     */
    upsert<T extends HRContactsUpsertArgs>(args: SelectSubset<T, HRContactsUpsertArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HRContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsCountArgs} args - Arguments to filter HRContacts to count.
     * @example
     * // Count the number of HRContacts
     * const count = await prisma.hRContacts.count({
     *   where: {
     *     // ... the filter for the HRContacts we want to count
     *   }
     * })
    **/
    count<T extends HRContactsCountArgs>(
      args?: Subset<T, HRContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HRContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HRContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HRContactsAggregateArgs>(args: Subset<T, HRContactsAggregateArgs>): Prisma.PrismaPromise<GetHRContactsAggregateType<T>>

    /**
     * Group by HRContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HRContactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HRContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HRContactsGroupByArgs['orderBy'] }
        : { orderBy?: HRContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HRContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHRContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HRContacts model
   */
  readonly fields: HRContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HRContacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HRContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompaniesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompaniesDefaultArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobs<T extends HRContacts$jobsArgs<ExtArgs> = {}>(args?: Subset<T, HRContacts$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends HRContacts$stepsArgs<ExtArgs> = {}>(args?: Subset<T, HRContacts$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HRContacts model
   */
  interface HRContactsFieldRefs {
    readonly id: FieldRef<"HRContacts", 'String'>
    readonly companyId: FieldRef<"HRContacts", 'String'>
    readonly name: FieldRef<"HRContacts", 'String'>
    readonly email: FieldRef<"HRContacts", 'String'>
    readonly phone: FieldRef<"HRContacts", 'String'>
    readonly role: FieldRef<"HRContacts", 'String'>
    readonly notes: FieldRef<"HRContacts", 'String'>
    readonly linkedin: FieldRef<"HRContacts", 'String'>
    readonly createdAt: FieldRef<"HRContacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HRContacts findUnique
   */
  export type HRContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * Filter, which HRContacts to fetch.
     */
    where: HRContactsWhereUniqueInput
  }

  /**
   * HRContacts findUniqueOrThrow
   */
  export type HRContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * Filter, which HRContacts to fetch.
     */
    where: HRContactsWhereUniqueInput
  }

  /**
   * HRContacts findFirst
   */
  export type HRContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * Filter, which HRContacts to fetch.
     */
    where?: HRContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRContacts to fetch.
     */
    orderBy?: HRContactsOrderByWithRelationInput | HRContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HRContacts.
     */
    cursor?: HRContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HRContacts.
     */
    distinct?: HRContactsScalarFieldEnum | HRContactsScalarFieldEnum[]
  }

  /**
   * HRContacts findFirstOrThrow
   */
  export type HRContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * Filter, which HRContacts to fetch.
     */
    where?: HRContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRContacts to fetch.
     */
    orderBy?: HRContactsOrderByWithRelationInput | HRContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HRContacts.
     */
    cursor?: HRContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HRContacts.
     */
    distinct?: HRContactsScalarFieldEnum | HRContactsScalarFieldEnum[]
  }

  /**
   * HRContacts findMany
   */
  export type HRContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * Filter, which HRContacts to fetch.
     */
    where?: HRContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HRContacts to fetch.
     */
    orderBy?: HRContactsOrderByWithRelationInput | HRContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HRContacts.
     */
    cursor?: HRContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HRContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HRContacts.
     */
    skip?: number
    distinct?: HRContactsScalarFieldEnum | HRContactsScalarFieldEnum[]
  }

  /**
   * HRContacts create
   */
  export type HRContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a HRContacts.
     */
    data: XOR<HRContactsCreateInput, HRContactsUncheckedCreateInput>
  }

  /**
   * HRContacts createMany
   */
  export type HRContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HRContacts.
     */
    data: HRContactsCreateManyInput | HRContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HRContacts createManyAndReturn
   */
  export type HRContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * The data used to create many HRContacts.
     */
    data: HRContactsCreateManyInput | HRContactsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HRContacts update
   */
  export type HRContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a HRContacts.
     */
    data: XOR<HRContactsUpdateInput, HRContactsUncheckedUpdateInput>
    /**
     * Choose, which HRContacts to update.
     */
    where: HRContactsWhereUniqueInput
  }

  /**
   * HRContacts updateMany
   */
  export type HRContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HRContacts.
     */
    data: XOR<HRContactsUpdateManyMutationInput, HRContactsUncheckedUpdateManyInput>
    /**
     * Filter which HRContacts to update
     */
    where?: HRContactsWhereInput
    /**
     * Limit how many HRContacts to update.
     */
    limit?: number
  }

  /**
   * HRContacts updateManyAndReturn
   */
  export type HRContactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * The data used to update HRContacts.
     */
    data: XOR<HRContactsUpdateManyMutationInput, HRContactsUncheckedUpdateManyInput>
    /**
     * Filter which HRContacts to update
     */
    where?: HRContactsWhereInput
    /**
     * Limit how many HRContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HRContacts upsert
   */
  export type HRContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the HRContacts to update in case it exists.
     */
    where: HRContactsWhereUniqueInput
    /**
     * In case the HRContacts found by the `where` argument doesn't exist, create a new HRContacts with this data.
     */
    create: XOR<HRContactsCreateInput, HRContactsUncheckedCreateInput>
    /**
     * In case the HRContacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HRContactsUpdateInput, HRContactsUncheckedUpdateInput>
  }

  /**
   * HRContacts delete
   */
  export type HRContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    /**
     * Filter which HRContacts to delete.
     */
    where: HRContactsWhereUniqueInput
  }

  /**
   * HRContacts deleteMany
   */
  export type HRContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HRContacts to delete
     */
    where?: HRContactsWhereInput
    /**
     * Limit how many HRContacts to delete.
     */
    limit?: number
  }

  /**
   * HRContacts.jobs
   */
  export type HRContacts$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    where?: JobApplicationsWhereInput
    orderBy?: JobApplicationsOrderByWithRelationInput | JobApplicationsOrderByWithRelationInput[]
    cursor?: JobApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationsScalarFieldEnum | JobApplicationsScalarFieldEnum[]
  }

  /**
   * HRContacts.steps
   */
  export type HRContacts$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    where?: InterviewStepsWhereInput
    orderBy?: InterviewStepsOrderByWithRelationInput | InterviewStepsOrderByWithRelationInput[]
    cursor?: InterviewStepsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewStepsScalarFieldEnum | InterviewStepsScalarFieldEnum[]
  }

  /**
   * HRContacts without action
   */
  export type HRContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
  }


  /**
   * Model JobApplications
   */

  export type AggregateJobApplications = {
    _count: JobApplicationsCountAggregateOutputType | null
    _min: JobApplicationsMinAggregateOutputType | null
    _max: JobApplicationsMaxAggregateOutputType | null
  }

  export type JobApplicationsMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    position: string | null
    description: string | null
    status: $Enums.ApplicationStatus | null
    salary: string | null
    notes: string | null
    appliedAt: Date | null
    source: string | null
    cvFile: string | null
    coverLetterFile: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type JobApplicationsMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    position: string | null
    description: string | null
    status: $Enums.ApplicationStatus | null
    salary: string | null
    notes: string | null
    appliedAt: Date | null
    source: string | null
    cvFile: string | null
    coverLetterFile: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type JobApplicationsCountAggregateOutputType = {
    id: number
    companyId: number
    position: number
    description: number
    status: number
    salary: number
    notes: number
    appliedAt: number
    source: number
    cvFile: number
    coverLetterFile: number
    userId: number
    createdAt: number
    _all: number
  }


  export type JobApplicationsMinAggregateInputType = {
    id?: true
    companyId?: true
    position?: true
    description?: true
    status?: true
    salary?: true
    notes?: true
    appliedAt?: true
    source?: true
    cvFile?: true
    coverLetterFile?: true
    userId?: true
    createdAt?: true
  }

  export type JobApplicationsMaxAggregateInputType = {
    id?: true
    companyId?: true
    position?: true
    description?: true
    status?: true
    salary?: true
    notes?: true
    appliedAt?: true
    source?: true
    cvFile?: true
    coverLetterFile?: true
    userId?: true
    createdAt?: true
  }

  export type JobApplicationsCountAggregateInputType = {
    id?: true
    companyId?: true
    position?: true
    description?: true
    status?: true
    salary?: true
    notes?: true
    appliedAt?: true
    source?: true
    cvFile?: true
    coverLetterFile?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type JobApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to aggregate.
     */
    where?: JobApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationsOrderByWithRelationInput | JobApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationsMaxAggregateInputType
  }

  export type GetJobApplicationsAggregateType<T extends JobApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplications[P]>
      : GetScalarType<T[P], AggregateJobApplications[P]>
  }




  export type JobApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationsWhereInput
    orderBy?: JobApplicationsOrderByWithAggregationInput | JobApplicationsOrderByWithAggregationInput[]
    by: JobApplicationsScalarFieldEnum[] | JobApplicationsScalarFieldEnum
    having?: JobApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationsCountAggregateInputType | true
    _min?: JobApplicationsMinAggregateInputType
    _max?: JobApplicationsMaxAggregateInputType
  }

  export type JobApplicationsGroupByOutputType = {
    id: string
    companyId: string
    position: string
    description: string | null
    status: $Enums.ApplicationStatus
    salary: string | null
    notes: string | null
    appliedAt: Date | null
    source: string | null
    cvFile: string | null
    coverLetterFile: string | null
    userId: string | null
    createdAt: Date
    _count: JobApplicationsCountAggregateOutputType | null
    _min: JobApplicationsMinAggregateOutputType | null
    _max: JobApplicationsMaxAggregateOutputType | null
  }

  type GetJobApplicationsGroupByPayload<T extends JobApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    position?: boolean
    description?: boolean
    status?: boolean
    salary?: boolean
    notes?: boolean
    appliedAt?: boolean
    source?: boolean
    cvFile?: boolean
    coverLetterFile?: boolean
    userId?: boolean
    createdAt?: boolean
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
    steps?: boolean | JobApplications$stepsArgs<ExtArgs>
    hrContacts?: boolean | JobApplications$hrContactsArgs<ExtArgs>
    _count?: boolean | JobApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplications"]>

  export type JobApplicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    position?: boolean
    description?: boolean
    status?: boolean
    salary?: boolean
    notes?: boolean
    appliedAt?: boolean
    source?: boolean
    cvFile?: boolean
    coverLetterFile?: boolean
    userId?: boolean
    createdAt?: boolean
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplications"]>

  export type JobApplicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    position?: boolean
    description?: boolean
    status?: boolean
    salary?: boolean
    notes?: boolean
    appliedAt?: boolean
    source?: boolean
    cvFile?: boolean
    coverLetterFile?: boolean
    userId?: boolean
    createdAt?: boolean
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplications"]>

  export type JobApplicationsSelectScalar = {
    id?: boolean
    companyId?: boolean
    position?: boolean
    description?: boolean
    status?: boolean
    salary?: boolean
    notes?: boolean
    appliedAt?: boolean
    source?: boolean
    cvFile?: boolean
    coverLetterFile?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type JobApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "position" | "description" | "status" | "salary" | "notes" | "appliedAt" | "source" | "cvFile" | "coverLetterFile" | "userId" | "createdAt", ExtArgs["result"]["jobApplications"]>
  export type JobApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
    steps?: boolean | JobApplications$stepsArgs<ExtArgs>
    hrContacts?: boolean | JobApplications$hrContactsArgs<ExtArgs>
    _count?: boolean | JobApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobApplicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }
  export type JobApplicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompaniesDefaultArgs<ExtArgs>
  }

  export type $JobApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplications"
    objects: {
      company: Prisma.$CompaniesPayload<ExtArgs>
      steps: Prisma.$InterviewStepsPayload<ExtArgs>[]
      hrContacts: Prisma.$HRContactsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      position: string
      description: string | null
      status: $Enums.ApplicationStatus
      salary: string | null
      notes: string | null
      appliedAt: Date | null
      source: string | null
      cvFile: string | null
      coverLetterFile: string | null
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["jobApplications"]>
    composites: {}
  }

  type JobApplicationsGetPayload<S extends boolean | null | undefined | JobApplicationsDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationsPayload, S>

  type JobApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationsCountAggregateInputType | true
    }

  export interface JobApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplications'], meta: { name: 'JobApplications' } }
    /**
     * Find zero or one JobApplications that matches the filter.
     * @param {JobApplicationsFindUniqueArgs} args - Arguments to find a JobApplications
     * @example
     * // Get one JobApplications
     * const jobApplications = await prisma.jobApplications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationsFindUniqueArgs>(args: SelectSubset<T, JobApplicationsFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationsFindUniqueOrThrowArgs} args - Arguments to find a JobApplications
     * @example
     * // Get one JobApplications
     * const jobApplications = await prisma.jobApplications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsFindFirstArgs} args - Arguments to find a JobApplications
     * @example
     * // Get one JobApplications
     * const jobApplications = await prisma.jobApplications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationsFindFirstArgs>(args?: SelectSubset<T, JobApplicationsFindFirstArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsFindFirstOrThrowArgs} args - Arguments to find a JobApplications
     * @example
     * // Get one JobApplications
     * const jobApplications = await prisma.jobApplications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplications.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationsWithIdOnly = await prisma.jobApplications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationsFindManyArgs>(args?: SelectSubset<T, JobApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplications.
     * @param {JobApplicationsCreateArgs} args - Arguments to create a JobApplications.
     * @example
     * // Create one JobApplications
     * const JobApplications = await prisma.jobApplications.create({
     *   data: {
     *     // ... data to create a JobApplications
     *   }
     * })
     * 
     */
    create<T extends JobApplicationsCreateArgs>(args: SelectSubset<T, JobApplicationsCreateArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationsCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplications = await prisma.jobApplications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationsCreateManyArgs>(args?: SelectSubset<T, JobApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationsCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplications = await prisma.jobApplications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationsWithIdOnly = await prisma.jobApplications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplications.
     * @param {JobApplicationsDeleteArgs} args - Arguments to delete one JobApplications.
     * @example
     * // Delete one JobApplications
     * const JobApplications = await prisma.jobApplications.delete({
     *   where: {
     *     // ... filter to delete one JobApplications
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationsDeleteArgs>(args: SelectSubset<T, JobApplicationsDeleteArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplications.
     * @param {JobApplicationsUpdateArgs} args - Arguments to update one JobApplications.
     * @example
     * // Update one JobApplications
     * const jobApplications = await prisma.jobApplications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationsUpdateArgs>(args: SelectSubset<T, JobApplicationsUpdateArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationsDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationsDeleteManyArgs>(args?: SelectSubset<T, JobApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplications = await prisma.jobApplications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationsUpdateManyArgs>(args: SelectSubset<T, JobApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationsUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplications = await prisma.jobApplications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationsWithIdOnly = await prisma.jobApplications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplications.
     * @param {JobApplicationsUpsertArgs} args - Arguments to update or create a JobApplications.
     * @example
     * // Update or create a JobApplications
     * const jobApplications = await prisma.jobApplications.upsert({
     *   create: {
     *     // ... data to create a JobApplications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplications we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationsUpsertArgs>(args: SelectSubset<T, JobApplicationsUpsertArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplications.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationsCountArgs>(
      args?: Subset<T, JobApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationsAggregateArgs>(args: Subset<T, JobApplicationsAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationsAggregateType<T>>

    /**
     * Group by JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplications model
   */
  readonly fields: JobApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompaniesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompaniesDefaultArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends JobApplications$stepsArgs<ExtArgs> = {}>(args?: Subset<T, JobApplications$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hrContacts<T extends JobApplications$hrContactsArgs<ExtArgs> = {}>(args?: Subset<T, JobApplications$hrContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplications model
   */
  interface JobApplicationsFieldRefs {
    readonly id: FieldRef<"JobApplications", 'String'>
    readonly companyId: FieldRef<"JobApplications", 'String'>
    readonly position: FieldRef<"JobApplications", 'String'>
    readonly description: FieldRef<"JobApplications", 'String'>
    readonly status: FieldRef<"JobApplications", 'ApplicationStatus'>
    readonly salary: FieldRef<"JobApplications", 'String'>
    readonly notes: FieldRef<"JobApplications", 'String'>
    readonly appliedAt: FieldRef<"JobApplications", 'DateTime'>
    readonly source: FieldRef<"JobApplications", 'String'>
    readonly cvFile: FieldRef<"JobApplications", 'String'>
    readonly coverLetterFile: FieldRef<"JobApplications", 'String'>
    readonly userId: FieldRef<"JobApplications", 'String'>
    readonly createdAt: FieldRef<"JobApplications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplications findUnique
   */
  export type JobApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where: JobApplicationsWhereUniqueInput
  }

  /**
   * JobApplications findUniqueOrThrow
   */
  export type JobApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where: JobApplicationsWhereUniqueInput
  }

  /**
   * JobApplications findFirst
   */
  export type JobApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationsOrderByWithRelationInput | JobApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationsScalarFieldEnum | JobApplicationsScalarFieldEnum[]
  }

  /**
   * JobApplications findFirstOrThrow
   */
  export type JobApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationsOrderByWithRelationInput | JobApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationsScalarFieldEnum | JobApplicationsScalarFieldEnum[]
  }

  /**
   * JobApplications findMany
   */
  export type JobApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationsOrderByWithRelationInput | JobApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationsScalarFieldEnum | JobApplicationsScalarFieldEnum[]
  }

  /**
   * JobApplications create
   */
  export type JobApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplications.
     */
    data: XOR<JobApplicationsCreateInput, JobApplicationsUncheckedCreateInput>
  }

  /**
   * JobApplications createMany
   */
  export type JobApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationsCreateManyInput | JobApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplications createManyAndReturn
   */
  export type JobApplicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationsCreateManyInput | JobApplicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplications update
   */
  export type JobApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplications.
     */
    data: XOR<JobApplicationsUpdateInput, JobApplicationsUncheckedUpdateInput>
    /**
     * Choose, which JobApplications to update.
     */
    where: JobApplicationsWhereUniqueInput
  }

  /**
   * JobApplications updateMany
   */
  export type JobApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationsUpdateManyMutationInput, JobApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationsWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplications updateManyAndReturn
   */
  export type JobApplicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationsUpdateManyMutationInput, JobApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationsWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplications upsert
   */
  export type JobApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplications to update in case it exists.
     */
    where: JobApplicationsWhereUniqueInput
    /**
     * In case the JobApplications found by the `where` argument doesn't exist, create a new JobApplications with this data.
     */
    create: XOR<JobApplicationsCreateInput, JobApplicationsUncheckedCreateInput>
    /**
     * In case the JobApplications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationsUpdateInput, JobApplicationsUncheckedUpdateInput>
  }

  /**
   * JobApplications delete
   */
  export type JobApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
    /**
     * Filter which JobApplications to delete.
     */
    where: JobApplicationsWhereUniqueInput
  }

  /**
   * JobApplications deleteMany
   */
  export type JobApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationsWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplications.steps
   */
  export type JobApplications$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    where?: InterviewStepsWhereInput
    orderBy?: InterviewStepsOrderByWithRelationInput | InterviewStepsOrderByWithRelationInput[]
    cursor?: InterviewStepsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewStepsScalarFieldEnum | InterviewStepsScalarFieldEnum[]
  }

  /**
   * JobApplications.hrContacts
   */
  export type JobApplications$hrContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    where?: HRContactsWhereInput
    orderBy?: HRContactsOrderByWithRelationInput | HRContactsOrderByWithRelationInput[]
    cursor?: HRContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HRContactsScalarFieldEnum | HRContactsScalarFieldEnum[]
  }

  /**
   * JobApplications without action
   */
  export type JobApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplications
     */
    select?: JobApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplications
     */
    omit?: JobApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model InterviewSteps
   */

  export type AggregateInterviewSteps = {
    _count: InterviewStepsCountAggregateOutputType | null
    _min: InterviewStepsMinAggregateOutputType | null
    _max: InterviewStepsMaxAggregateOutputType | null
  }

  export type InterviewStepsMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    title: string | null
    date: Date | null
    status: $Enums.StepStatus | null
    notes: string | null
    location: string | null
    interviewer: string | null
    feedback: string | null
    reminderAt: Date | null
    hrContactId: string | null
  }

  export type InterviewStepsMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    title: string | null
    date: Date | null
    status: $Enums.StepStatus | null
    notes: string | null
    location: string | null
    interviewer: string | null
    feedback: string | null
    reminderAt: Date | null
    hrContactId: string | null
  }

  export type InterviewStepsCountAggregateOutputType = {
    id: number
    jobId: number
    title: number
    date: number
    status: number
    notes: number
    location: number
    interviewer: number
    feedback: number
    reminderAt: number
    hrContactId: number
    _all: number
  }


  export type InterviewStepsMinAggregateInputType = {
    id?: true
    jobId?: true
    title?: true
    date?: true
    status?: true
    notes?: true
    location?: true
    interviewer?: true
    feedback?: true
    reminderAt?: true
    hrContactId?: true
  }

  export type InterviewStepsMaxAggregateInputType = {
    id?: true
    jobId?: true
    title?: true
    date?: true
    status?: true
    notes?: true
    location?: true
    interviewer?: true
    feedback?: true
    reminderAt?: true
    hrContactId?: true
  }

  export type InterviewStepsCountAggregateInputType = {
    id?: true
    jobId?: true
    title?: true
    date?: true
    status?: true
    notes?: true
    location?: true
    interviewer?: true
    feedback?: true
    reminderAt?: true
    hrContactId?: true
    _all?: true
  }

  export type InterviewStepsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSteps to aggregate.
     */
    where?: InterviewStepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSteps to fetch.
     */
    orderBy?: InterviewStepsOrderByWithRelationInput | InterviewStepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewStepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewSteps
    **/
    _count?: true | InterviewStepsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewStepsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewStepsMaxAggregateInputType
  }

  export type GetInterviewStepsAggregateType<T extends InterviewStepsAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewSteps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewSteps[P]>
      : GetScalarType<T[P], AggregateInterviewSteps[P]>
  }




  export type InterviewStepsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewStepsWhereInput
    orderBy?: InterviewStepsOrderByWithAggregationInput | InterviewStepsOrderByWithAggregationInput[]
    by: InterviewStepsScalarFieldEnum[] | InterviewStepsScalarFieldEnum
    having?: InterviewStepsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewStepsCountAggregateInputType | true
    _min?: InterviewStepsMinAggregateInputType
    _max?: InterviewStepsMaxAggregateInputType
  }

  export type InterviewStepsGroupByOutputType = {
    id: string
    jobId: string
    title: string
    date: Date
    status: $Enums.StepStatus
    notes: string | null
    location: string | null
    interviewer: string | null
    feedback: string | null
    reminderAt: Date | null
    hrContactId: string | null
    _count: InterviewStepsCountAggregateOutputType | null
    _min: InterviewStepsMinAggregateOutputType | null
    _max: InterviewStepsMaxAggregateOutputType | null
  }

  type GetInterviewStepsGroupByPayload<T extends InterviewStepsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewStepsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewStepsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewStepsGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewStepsGroupByOutputType[P]>
        }
      >
    >


  export type InterviewStepsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    location?: boolean
    interviewer?: boolean
    feedback?: boolean
    reminderAt?: boolean
    hrContactId?: boolean
    job?: boolean | JobApplicationsDefaultArgs<ExtArgs>
    hrContact?: boolean | InterviewSteps$hrContactArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSteps"]>

  export type InterviewStepsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    location?: boolean
    interviewer?: boolean
    feedback?: boolean
    reminderAt?: boolean
    hrContactId?: boolean
    job?: boolean | JobApplicationsDefaultArgs<ExtArgs>
    hrContact?: boolean | InterviewSteps$hrContactArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSteps"]>

  export type InterviewStepsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    location?: boolean
    interviewer?: boolean
    feedback?: boolean
    reminderAt?: boolean
    hrContactId?: boolean
    job?: boolean | JobApplicationsDefaultArgs<ExtArgs>
    hrContact?: boolean | InterviewSteps$hrContactArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSteps"]>

  export type InterviewStepsSelectScalar = {
    id?: boolean
    jobId?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    location?: boolean
    interviewer?: boolean
    feedback?: boolean
    reminderAt?: boolean
    hrContactId?: boolean
  }

  export type InterviewStepsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "title" | "date" | "status" | "notes" | "location" | "interviewer" | "feedback" | "reminderAt" | "hrContactId", ExtArgs["result"]["interviewSteps"]>
  export type InterviewStepsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobApplicationsDefaultArgs<ExtArgs>
    hrContact?: boolean | InterviewSteps$hrContactArgs<ExtArgs>
  }
  export type InterviewStepsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobApplicationsDefaultArgs<ExtArgs>
    hrContact?: boolean | InterviewSteps$hrContactArgs<ExtArgs>
  }
  export type InterviewStepsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobApplicationsDefaultArgs<ExtArgs>
    hrContact?: boolean | InterviewSteps$hrContactArgs<ExtArgs>
  }

  export type $InterviewStepsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewSteps"
    objects: {
      job: Prisma.$JobApplicationsPayload<ExtArgs>
      hrContact: Prisma.$HRContactsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      title: string
      date: Date
      status: $Enums.StepStatus
      notes: string | null
      location: string | null
      interviewer: string | null
      feedback: string | null
      reminderAt: Date | null
      hrContactId: string | null
    }, ExtArgs["result"]["interviewSteps"]>
    composites: {}
  }

  type InterviewStepsGetPayload<S extends boolean | null | undefined | InterviewStepsDefaultArgs> = $Result.GetResult<Prisma.$InterviewStepsPayload, S>

  type InterviewStepsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewStepsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewStepsCountAggregateInputType | true
    }

  export interface InterviewStepsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewSteps'], meta: { name: 'InterviewSteps' } }
    /**
     * Find zero or one InterviewSteps that matches the filter.
     * @param {InterviewStepsFindUniqueArgs} args - Arguments to find a InterviewSteps
     * @example
     * // Get one InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewStepsFindUniqueArgs>(args: SelectSubset<T, InterviewStepsFindUniqueArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewSteps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewStepsFindUniqueOrThrowArgs} args - Arguments to find a InterviewSteps
     * @example
     * // Get one InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewStepsFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewStepsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsFindFirstArgs} args - Arguments to find a InterviewSteps
     * @example
     * // Get one InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewStepsFindFirstArgs>(args?: SelectSubset<T, InterviewStepsFindFirstArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewSteps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsFindFirstOrThrowArgs} args - Arguments to find a InterviewSteps
     * @example
     * // Get one InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewStepsFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewStepsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.findMany()
     * 
     * // Get first 10 InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewStepsWithIdOnly = await prisma.interviewSteps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewStepsFindManyArgs>(args?: SelectSubset<T, InterviewStepsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewSteps.
     * @param {InterviewStepsCreateArgs} args - Arguments to create a InterviewSteps.
     * @example
     * // Create one InterviewSteps
     * const InterviewSteps = await prisma.interviewSteps.create({
     *   data: {
     *     // ... data to create a InterviewSteps
     *   }
     * })
     * 
     */
    create<T extends InterviewStepsCreateArgs>(args: SelectSubset<T, InterviewStepsCreateArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewSteps.
     * @param {InterviewStepsCreateManyArgs} args - Arguments to create many InterviewSteps.
     * @example
     * // Create many InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewStepsCreateManyArgs>(args?: SelectSubset<T, InterviewStepsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewSteps and returns the data saved in the database.
     * @param {InterviewStepsCreateManyAndReturnArgs} args - Arguments to create many InterviewSteps.
     * @example
     * // Create many InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewSteps and only return the `id`
     * const interviewStepsWithIdOnly = await prisma.interviewSteps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewStepsCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewStepsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewSteps.
     * @param {InterviewStepsDeleteArgs} args - Arguments to delete one InterviewSteps.
     * @example
     * // Delete one InterviewSteps
     * const InterviewSteps = await prisma.interviewSteps.delete({
     *   where: {
     *     // ... filter to delete one InterviewSteps
     *   }
     * })
     * 
     */
    delete<T extends InterviewStepsDeleteArgs>(args: SelectSubset<T, InterviewStepsDeleteArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewSteps.
     * @param {InterviewStepsUpdateArgs} args - Arguments to update one InterviewSteps.
     * @example
     * // Update one InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewStepsUpdateArgs>(args: SelectSubset<T, InterviewStepsUpdateArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewSteps.
     * @param {InterviewStepsDeleteManyArgs} args - Arguments to filter InterviewSteps to delete.
     * @example
     * // Delete a few InterviewSteps
     * const { count } = await prisma.interviewSteps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewStepsDeleteManyArgs>(args?: SelectSubset<T, InterviewStepsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewStepsUpdateManyArgs>(args: SelectSubset<T, InterviewStepsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewSteps and returns the data updated in the database.
     * @param {InterviewStepsUpdateManyAndReturnArgs} args - Arguments to update many InterviewSteps.
     * @example
     * // Update many InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewSteps and only return the `id`
     * const interviewStepsWithIdOnly = await prisma.interviewSteps.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewStepsUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewStepsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewSteps.
     * @param {InterviewStepsUpsertArgs} args - Arguments to update or create a InterviewSteps.
     * @example
     * // Update or create a InterviewSteps
     * const interviewSteps = await prisma.interviewSteps.upsert({
     *   create: {
     *     // ... data to create a InterviewSteps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewSteps we want to update
     *   }
     * })
     */
    upsert<T extends InterviewStepsUpsertArgs>(args: SelectSubset<T, InterviewStepsUpsertArgs<ExtArgs>>): Prisma__InterviewStepsClient<$Result.GetResult<Prisma.$InterviewStepsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsCountArgs} args - Arguments to filter InterviewSteps to count.
     * @example
     * // Count the number of InterviewSteps
     * const count = await prisma.interviewSteps.count({
     *   where: {
     *     // ... the filter for the InterviewSteps we want to count
     *   }
     * })
    **/
    count<T extends InterviewStepsCountArgs>(
      args?: Subset<T, InterviewStepsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewStepsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewStepsAggregateArgs>(args: Subset<T, InterviewStepsAggregateArgs>): Prisma.PrismaPromise<GetInterviewStepsAggregateType<T>>

    /**
     * Group by InterviewSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewStepsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewStepsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewStepsGroupByArgs['orderBy'] }
        : { orderBy?: InterviewStepsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewStepsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewStepsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewSteps model
   */
  readonly fields: InterviewStepsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewSteps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewStepsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobApplicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobApplicationsDefaultArgs<ExtArgs>>): Prisma__JobApplicationsClient<$Result.GetResult<Prisma.$JobApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hrContact<T extends InterviewSteps$hrContactArgs<ExtArgs> = {}>(args?: Subset<T, InterviewSteps$hrContactArgs<ExtArgs>>): Prisma__HRContactsClient<$Result.GetResult<Prisma.$HRContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewSteps model
   */
  interface InterviewStepsFieldRefs {
    readonly id: FieldRef<"InterviewSteps", 'String'>
    readonly jobId: FieldRef<"InterviewSteps", 'String'>
    readonly title: FieldRef<"InterviewSteps", 'String'>
    readonly date: FieldRef<"InterviewSteps", 'DateTime'>
    readonly status: FieldRef<"InterviewSteps", 'StepStatus'>
    readonly notes: FieldRef<"InterviewSteps", 'String'>
    readonly location: FieldRef<"InterviewSteps", 'String'>
    readonly interviewer: FieldRef<"InterviewSteps", 'String'>
    readonly feedback: FieldRef<"InterviewSteps", 'String'>
    readonly reminderAt: FieldRef<"InterviewSteps", 'DateTime'>
    readonly hrContactId: FieldRef<"InterviewSteps", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InterviewSteps findUnique
   */
  export type InterviewStepsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSteps to fetch.
     */
    where: InterviewStepsWhereUniqueInput
  }

  /**
   * InterviewSteps findUniqueOrThrow
   */
  export type InterviewStepsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSteps to fetch.
     */
    where: InterviewStepsWhereUniqueInput
  }

  /**
   * InterviewSteps findFirst
   */
  export type InterviewStepsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSteps to fetch.
     */
    where?: InterviewStepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSteps to fetch.
     */
    orderBy?: InterviewStepsOrderByWithRelationInput | InterviewStepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewSteps.
     */
    cursor?: InterviewStepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewSteps.
     */
    distinct?: InterviewStepsScalarFieldEnum | InterviewStepsScalarFieldEnum[]
  }

  /**
   * InterviewSteps findFirstOrThrow
   */
  export type InterviewStepsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSteps to fetch.
     */
    where?: InterviewStepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSteps to fetch.
     */
    orderBy?: InterviewStepsOrderByWithRelationInput | InterviewStepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewSteps.
     */
    cursor?: InterviewStepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewSteps.
     */
    distinct?: InterviewStepsScalarFieldEnum | InterviewStepsScalarFieldEnum[]
  }

  /**
   * InterviewSteps findMany
   */
  export type InterviewStepsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSteps to fetch.
     */
    where?: InterviewStepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSteps to fetch.
     */
    orderBy?: InterviewStepsOrderByWithRelationInput | InterviewStepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewSteps.
     */
    cursor?: InterviewStepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSteps.
     */
    skip?: number
    distinct?: InterviewStepsScalarFieldEnum | InterviewStepsScalarFieldEnum[]
  }

  /**
   * InterviewSteps create
   */
  export type InterviewStepsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewSteps.
     */
    data: XOR<InterviewStepsCreateInput, InterviewStepsUncheckedCreateInput>
  }

  /**
   * InterviewSteps createMany
   */
  export type InterviewStepsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewSteps.
     */
    data: InterviewStepsCreateManyInput | InterviewStepsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewSteps createManyAndReturn
   */
  export type InterviewStepsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewSteps.
     */
    data: InterviewStepsCreateManyInput | InterviewStepsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewSteps update
   */
  export type InterviewStepsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewSteps.
     */
    data: XOR<InterviewStepsUpdateInput, InterviewStepsUncheckedUpdateInput>
    /**
     * Choose, which InterviewSteps to update.
     */
    where: InterviewStepsWhereUniqueInput
  }

  /**
   * InterviewSteps updateMany
   */
  export type InterviewStepsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewSteps.
     */
    data: XOR<InterviewStepsUpdateManyMutationInput, InterviewStepsUncheckedUpdateManyInput>
    /**
     * Filter which InterviewSteps to update
     */
    where?: InterviewStepsWhereInput
    /**
     * Limit how many InterviewSteps to update.
     */
    limit?: number
  }

  /**
   * InterviewSteps updateManyAndReturn
   */
  export type InterviewStepsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * The data used to update InterviewSteps.
     */
    data: XOR<InterviewStepsUpdateManyMutationInput, InterviewStepsUncheckedUpdateManyInput>
    /**
     * Filter which InterviewSteps to update
     */
    where?: InterviewStepsWhereInput
    /**
     * Limit how many InterviewSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewSteps upsert
   */
  export type InterviewStepsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewSteps to update in case it exists.
     */
    where: InterviewStepsWhereUniqueInput
    /**
     * In case the InterviewSteps found by the `where` argument doesn't exist, create a new InterviewSteps with this data.
     */
    create: XOR<InterviewStepsCreateInput, InterviewStepsUncheckedCreateInput>
    /**
     * In case the InterviewSteps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewStepsUpdateInput, InterviewStepsUncheckedUpdateInput>
  }

  /**
   * InterviewSteps delete
   */
  export type InterviewStepsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
    /**
     * Filter which InterviewSteps to delete.
     */
    where: InterviewStepsWhereUniqueInput
  }

  /**
   * InterviewSteps deleteMany
   */
  export type InterviewStepsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSteps to delete
     */
    where?: InterviewStepsWhereInput
    /**
     * Limit how many InterviewSteps to delete.
     */
    limit?: number
  }

  /**
   * InterviewSteps.hrContact
   */
  export type InterviewSteps$hrContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HRContacts
     */
    select?: HRContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HRContacts
     */
    omit?: HRContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HRContactsInclude<ExtArgs> | null
    where?: HRContactsWhereInput
  }

  /**
   * InterviewSteps without action
   */
  export type InterviewStepsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSteps
     */
    select?: InterviewStepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSteps
     */
    omit?: InterviewStepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewStepsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    website: 'website',
    industry: 'industry',
    size: 'size',
    logo: 'logo',
    createdAt: 'createdAt'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const HRContactsScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    notes: 'notes',
    linkedin: 'linkedin',
    createdAt: 'createdAt'
  };

  export type HRContactsScalarFieldEnum = (typeof HRContactsScalarFieldEnum)[keyof typeof HRContactsScalarFieldEnum]


  export const JobApplicationsScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    position: 'position',
    description: 'description',
    status: 'status',
    salary: 'salary',
    notes: 'notes',
    appliedAt: 'appliedAt',
    source: 'source',
    cvFile: 'cvFile',
    coverLetterFile: 'coverLetterFile',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type JobApplicationsScalarFieldEnum = (typeof JobApplicationsScalarFieldEnum)[keyof typeof JobApplicationsScalarFieldEnum]


  export const InterviewStepsScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    title: 'title',
    date: 'date',
    status: 'status',
    notes: 'notes',
    location: 'location',
    interviewer: 'interviewer',
    feedback: 'feedback',
    reminderAt: 'reminderAt',
    hrContactId: 'hrContactId'
  };

  export type InterviewStepsScalarFieldEnum = (typeof InterviewStepsScalarFieldEnum)[keyof typeof InterviewStepsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'StepStatus'
   */
  export type EnumStepStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StepStatus'>
    


  /**
   * Reference to a field of type 'StepStatus[]'
   */
  export type ListEnumStepStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StepStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CompaniesWhereInput = {
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    id?: StringFilter<"Companies"> | string
    name?: StringFilter<"Companies"> | string
    location?: StringNullableFilter<"Companies"> | string | null
    website?: StringNullableFilter<"Companies"> | string | null
    industry?: StringNullableFilter<"Companies"> | string | null
    size?: StringNullableFilter<"Companies"> | string | null
    logo?: StringNullableFilter<"Companies"> | string | null
    createdAt?: DateTimeFilter<"Companies"> | Date | string
    jobs?: JobApplicationsListRelationFilter
    contacts?: HRContactsListRelationFilter
  }

  export type CompaniesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    jobs?: JobApplicationsOrderByRelationAggregateInput
    contacts?: HRContactsOrderByRelationAggregateInput
  }

  export type CompaniesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    name?: StringFilter<"Companies"> | string
    location?: StringNullableFilter<"Companies"> | string | null
    website?: StringNullableFilter<"Companies"> | string | null
    industry?: StringNullableFilter<"Companies"> | string | null
    size?: StringNullableFilter<"Companies"> | string | null
    logo?: StringNullableFilter<"Companies"> | string | null
    createdAt?: DateTimeFilter<"Companies"> | Date | string
    jobs?: JobApplicationsListRelationFilter
    contacts?: HRContactsListRelationFilter
  }, "id">

  export type CompaniesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompaniesCountOrderByAggregateInput
    _max?: CompaniesMaxOrderByAggregateInput
    _min?: CompaniesMinOrderByAggregateInput
  }

  export type CompaniesScalarWhereWithAggregatesInput = {
    AND?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    OR?: CompaniesScalarWhereWithAggregatesInput[]
    NOT?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Companies"> | string
    name?: StringWithAggregatesFilter<"Companies"> | string
    location?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    website?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    size?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Companies"> | Date | string
  }

  export type HRContactsWhereInput = {
    AND?: HRContactsWhereInput | HRContactsWhereInput[]
    OR?: HRContactsWhereInput[]
    NOT?: HRContactsWhereInput | HRContactsWhereInput[]
    id?: StringFilter<"HRContacts"> | string
    companyId?: StringFilter<"HRContacts"> | string
    name?: StringFilter<"HRContacts"> | string
    email?: StringNullableFilter<"HRContacts"> | string | null
    phone?: StringNullableFilter<"HRContacts"> | string | null
    role?: StringNullableFilter<"HRContacts"> | string | null
    notes?: StringNullableFilter<"HRContacts"> | string | null
    linkedin?: StringNullableFilter<"HRContacts"> | string | null
    createdAt?: DateTimeFilter<"HRContacts"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
    jobs?: JobApplicationsListRelationFilter
    steps?: InterviewStepsListRelationFilter
  }

  export type HRContactsOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompaniesOrderByWithRelationInput
    jobs?: JobApplicationsOrderByRelationAggregateInput
    steps?: InterviewStepsOrderByRelationAggregateInput
  }

  export type HRContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HRContactsWhereInput | HRContactsWhereInput[]
    OR?: HRContactsWhereInput[]
    NOT?: HRContactsWhereInput | HRContactsWhereInput[]
    companyId?: StringFilter<"HRContacts"> | string
    name?: StringFilter<"HRContacts"> | string
    email?: StringNullableFilter<"HRContacts"> | string | null
    phone?: StringNullableFilter<"HRContacts"> | string | null
    role?: StringNullableFilter<"HRContacts"> | string | null
    notes?: StringNullableFilter<"HRContacts"> | string | null
    linkedin?: StringNullableFilter<"HRContacts"> | string | null
    createdAt?: DateTimeFilter<"HRContacts"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
    jobs?: JobApplicationsListRelationFilter
    steps?: InterviewStepsListRelationFilter
  }, "id">

  export type HRContactsOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HRContactsCountOrderByAggregateInput
    _max?: HRContactsMaxOrderByAggregateInput
    _min?: HRContactsMinOrderByAggregateInput
  }

  export type HRContactsScalarWhereWithAggregatesInput = {
    AND?: HRContactsScalarWhereWithAggregatesInput | HRContactsScalarWhereWithAggregatesInput[]
    OR?: HRContactsScalarWhereWithAggregatesInput[]
    NOT?: HRContactsScalarWhereWithAggregatesInput | HRContactsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HRContacts"> | string
    companyId?: StringWithAggregatesFilter<"HRContacts"> | string
    name?: StringWithAggregatesFilter<"HRContacts"> | string
    email?: StringNullableWithAggregatesFilter<"HRContacts"> | string | null
    phone?: StringNullableWithAggregatesFilter<"HRContacts"> | string | null
    role?: StringNullableWithAggregatesFilter<"HRContacts"> | string | null
    notes?: StringNullableWithAggregatesFilter<"HRContacts"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"HRContacts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HRContacts"> | Date | string
  }

  export type JobApplicationsWhereInput = {
    AND?: JobApplicationsWhereInput | JobApplicationsWhereInput[]
    OR?: JobApplicationsWhereInput[]
    NOT?: JobApplicationsWhereInput | JobApplicationsWhereInput[]
    id?: StringFilter<"JobApplications"> | string
    companyId?: StringFilter<"JobApplications"> | string
    position?: StringFilter<"JobApplications"> | string
    description?: StringNullableFilter<"JobApplications"> | string | null
    status?: EnumApplicationStatusFilter<"JobApplications"> | $Enums.ApplicationStatus
    salary?: StringNullableFilter<"JobApplications"> | string | null
    notes?: StringNullableFilter<"JobApplications"> | string | null
    appliedAt?: DateTimeNullableFilter<"JobApplications"> | Date | string | null
    source?: StringNullableFilter<"JobApplications"> | string | null
    cvFile?: StringNullableFilter<"JobApplications"> | string | null
    coverLetterFile?: StringNullableFilter<"JobApplications"> | string | null
    userId?: StringNullableFilter<"JobApplications"> | string | null
    createdAt?: DateTimeFilter<"JobApplications"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
    steps?: InterviewStepsListRelationFilter
    hrContacts?: HRContactsListRelationFilter
  }

  export type JobApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    position?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    salary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    appliedAt?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    cvFile?: SortOrderInput | SortOrder
    coverLetterFile?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    company?: CompaniesOrderByWithRelationInput
    steps?: InterviewStepsOrderByRelationAggregateInput
    hrContacts?: HRContactsOrderByRelationAggregateInput
  }

  export type JobApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobApplicationsWhereInput | JobApplicationsWhereInput[]
    OR?: JobApplicationsWhereInput[]
    NOT?: JobApplicationsWhereInput | JobApplicationsWhereInput[]
    companyId?: StringFilter<"JobApplications"> | string
    position?: StringFilter<"JobApplications"> | string
    description?: StringNullableFilter<"JobApplications"> | string | null
    status?: EnumApplicationStatusFilter<"JobApplications"> | $Enums.ApplicationStatus
    salary?: StringNullableFilter<"JobApplications"> | string | null
    notes?: StringNullableFilter<"JobApplications"> | string | null
    appliedAt?: DateTimeNullableFilter<"JobApplications"> | Date | string | null
    source?: StringNullableFilter<"JobApplications"> | string | null
    cvFile?: StringNullableFilter<"JobApplications"> | string | null
    coverLetterFile?: StringNullableFilter<"JobApplications"> | string | null
    userId?: StringNullableFilter<"JobApplications"> | string | null
    createdAt?: DateTimeFilter<"JobApplications"> | Date | string
    company?: XOR<CompaniesScalarRelationFilter, CompaniesWhereInput>
    steps?: InterviewStepsListRelationFilter
    hrContacts?: HRContactsListRelationFilter
  }, "id">

  export type JobApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    position?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    salary?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    appliedAt?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    cvFile?: SortOrderInput | SortOrder
    coverLetterFile?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JobApplicationsCountOrderByAggregateInput
    _max?: JobApplicationsMaxOrderByAggregateInput
    _min?: JobApplicationsMinOrderByAggregateInput
  }

  export type JobApplicationsScalarWhereWithAggregatesInput = {
    AND?: JobApplicationsScalarWhereWithAggregatesInput | JobApplicationsScalarWhereWithAggregatesInput[]
    OR?: JobApplicationsScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationsScalarWhereWithAggregatesInput | JobApplicationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplications"> | string
    companyId?: StringWithAggregatesFilter<"JobApplications"> | string
    position?: StringWithAggregatesFilter<"JobApplications"> | string
    description?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    status?: EnumApplicationStatusWithAggregatesFilter<"JobApplications"> | $Enums.ApplicationStatus
    salary?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    notes?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    appliedAt?: DateTimeNullableWithAggregatesFilter<"JobApplications"> | Date | string | null
    source?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    cvFile?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    coverLetterFile?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    userId?: StringNullableWithAggregatesFilter<"JobApplications"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobApplications"> | Date | string
  }

  export type InterviewStepsWhereInput = {
    AND?: InterviewStepsWhereInput | InterviewStepsWhereInput[]
    OR?: InterviewStepsWhereInput[]
    NOT?: InterviewStepsWhereInput | InterviewStepsWhereInput[]
    id?: StringFilter<"InterviewSteps"> | string
    jobId?: StringFilter<"InterviewSteps"> | string
    title?: StringFilter<"InterviewSteps"> | string
    date?: DateTimeFilter<"InterviewSteps"> | Date | string
    status?: EnumStepStatusFilter<"InterviewSteps"> | $Enums.StepStatus
    notes?: StringNullableFilter<"InterviewSteps"> | string | null
    location?: StringNullableFilter<"InterviewSteps"> | string | null
    interviewer?: StringNullableFilter<"InterviewSteps"> | string | null
    feedback?: StringNullableFilter<"InterviewSteps"> | string | null
    reminderAt?: DateTimeNullableFilter<"InterviewSteps"> | Date | string | null
    hrContactId?: StringNullableFilter<"InterviewSteps"> | string | null
    job?: XOR<JobApplicationsScalarRelationFilter, JobApplicationsWhereInput>
    hrContact?: XOR<HRContactsNullableScalarRelationFilter, HRContactsWhereInput> | null
  }

  export type InterviewStepsOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    interviewer?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    reminderAt?: SortOrderInput | SortOrder
    hrContactId?: SortOrderInput | SortOrder
    job?: JobApplicationsOrderByWithRelationInput
    hrContact?: HRContactsOrderByWithRelationInput
  }

  export type InterviewStepsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewStepsWhereInput | InterviewStepsWhereInput[]
    OR?: InterviewStepsWhereInput[]
    NOT?: InterviewStepsWhereInput | InterviewStepsWhereInput[]
    jobId?: StringFilter<"InterviewSteps"> | string
    title?: StringFilter<"InterviewSteps"> | string
    date?: DateTimeFilter<"InterviewSteps"> | Date | string
    status?: EnumStepStatusFilter<"InterviewSteps"> | $Enums.StepStatus
    notes?: StringNullableFilter<"InterviewSteps"> | string | null
    location?: StringNullableFilter<"InterviewSteps"> | string | null
    interviewer?: StringNullableFilter<"InterviewSteps"> | string | null
    feedback?: StringNullableFilter<"InterviewSteps"> | string | null
    reminderAt?: DateTimeNullableFilter<"InterviewSteps"> | Date | string | null
    hrContactId?: StringNullableFilter<"InterviewSteps"> | string | null
    job?: XOR<JobApplicationsScalarRelationFilter, JobApplicationsWhereInput>
    hrContact?: XOR<HRContactsNullableScalarRelationFilter, HRContactsWhereInput> | null
  }, "id">

  export type InterviewStepsOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    interviewer?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    reminderAt?: SortOrderInput | SortOrder
    hrContactId?: SortOrderInput | SortOrder
    _count?: InterviewStepsCountOrderByAggregateInput
    _max?: InterviewStepsMaxOrderByAggregateInput
    _min?: InterviewStepsMinOrderByAggregateInput
  }

  export type InterviewStepsScalarWhereWithAggregatesInput = {
    AND?: InterviewStepsScalarWhereWithAggregatesInput | InterviewStepsScalarWhereWithAggregatesInput[]
    OR?: InterviewStepsScalarWhereWithAggregatesInput[]
    NOT?: InterviewStepsScalarWhereWithAggregatesInput | InterviewStepsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewSteps"> | string
    jobId?: StringWithAggregatesFilter<"InterviewSteps"> | string
    title?: StringWithAggregatesFilter<"InterviewSteps"> | string
    date?: DateTimeWithAggregatesFilter<"InterviewSteps"> | Date | string
    status?: EnumStepStatusWithAggregatesFilter<"InterviewSteps"> | $Enums.StepStatus
    notes?: StringNullableWithAggregatesFilter<"InterviewSteps"> | string | null
    location?: StringNullableWithAggregatesFilter<"InterviewSteps"> | string | null
    interviewer?: StringNullableWithAggregatesFilter<"InterviewSteps"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"InterviewSteps"> | string | null
    reminderAt?: DateTimeNullableWithAggregatesFilter<"InterviewSteps"> | Date | string | null
    hrContactId?: StringNullableWithAggregatesFilter<"InterviewSteps"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type CompaniesCreateInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsCreateNestedManyWithoutCompanyInput
    contacts?: HRContactsCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsUncheckedCreateNestedManyWithoutCompanyInput
    contacts?: HRContactsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUpdateManyWithoutCompanyNestedInput
    contacts?: HRContactsUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUncheckedUpdateManyWithoutCompanyNestedInput
    contacts?: HRContactsUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesCreateManyInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
  }

  export type CompaniesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompaniesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HRContactsCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    company: CompaniesCreateNestedOneWithoutContactsInput
    jobs?: JobApplicationsCreateNestedManyWithoutHrContactsInput
    steps?: InterviewStepsCreateNestedManyWithoutHrContactInput
  }

  export type HRContactsUncheckedCreateInput = {
    id?: string
    companyId: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsUncheckedCreateNestedManyWithoutHrContactsInput
    steps?: InterviewStepsUncheckedCreateNestedManyWithoutHrContactInput
  }

  export type HRContactsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutContactsNestedInput
    jobs?: JobApplicationsUpdateManyWithoutHrContactsNestedInput
    steps?: InterviewStepsUpdateManyWithoutHrContactNestedInput
  }

  export type HRContactsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUncheckedUpdateManyWithoutHrContactsNestedInput
    steps?: InterviewStepsUncheckedUpdateManyWithoutHrContactNestedInput
  }

  export type HRContactsCreateManyInput = {
    id?: string
    companyId: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
  }

  export type HRContactsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HRContactsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationsCreateInput = {
    id?: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    company: CompaniesCreateNestedOneWithoutJobsInput
    steps?: InterviewStepsCreateNestedManyWithoutJobInput
    hrContacts?: HRContactsCreateNestedManyWithoutJobsInput
  }

  export type JobApplicationsUncheckedCreateInput = {
    id?: string
    companyId: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    steps?: InterviewStepsUncheckedCreateNestedManyWithoutJobInput
    hrContacts?: HRContactsUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobApplicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutJobsNestedInput
    steps?: InterviewStepsUpdateManyWithoutJobNestedInput
    hrContacts?: HRContactsUpdateManyWithoutJobsNestedInput
  }

  export type JobApplicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: InterviewStepsUncheckedUpdateManyWithoutJobNestedInput
    hrContacts?: HRContactsUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type JobApplicationsCreateManyInput = {
    id?: string
    companyId: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type JobApplicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewStepsCreateInput = {
    id?: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    job: JobApplicationsCreateNestedOneWithoutStepsInput
    hrContact?: HRContactsCreateNestedOneWithoutStepsInput
  }

  export type InterviewStepsUncheckedCreateInput = {
    id?: string
    jobId: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    hrContactId?: string | null
  }

  export type InterviewStepsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: JobApplicationsUpdateOneRequiredWithoutStepsNestedInput
    hrContact?: HRContactsUpdateOneWithoutStepsNestedInput
  }

  export type InterviewStepsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hrContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewStepsCreateManyInput = {
    id?: string
    jobId: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    hrContactId?: string | null
  }

  export type InterviewStepsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InterviewStepsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hrContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobApplicationsListRelationFilter = {
    every?: JobApplicationsWhereInput
    some?: JobApplicationsWhereInput
    none?: JobApplicationsWhereInput
  }

  export type HRContactsListRelationFilter = {
    every?: HRContactsWhereInput
    some?: HRContactsWhereInput
    none?: HRContactsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HRContactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompaniesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    website?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type CompaniesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    website?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type CompaniesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    website?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompaniesScalarRelationFilter = {
    is?: CompaniesWhereInput
    isNot?: CompaniesWhereInput
  }

  export type InterviewStepsListRelationFilter = {
    every?: InterviewStepsWhereInput
    some?: InterviewStepsWhereInput
    none?: InterviewStepsWhereInput
  }

  export type InterviewStepsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HRContactsCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    notes?: SortOrder
    linkedin?: SortOrder
    createdAt?: SortOrder
  }

  export type HRContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    notes?: SortOrder
    linkedin?: SortOrder
    createdAt?: SortOrder
  }

  export type HRContactsMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    notes?: SortOrder
    linkedin?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JobApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    position?: SortOrder
    description?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    notes?: SortOrder
    appliedAt?: SortOrder
    source?: SortOrder
    cvFile?: SortOrder
    coverLetterFile?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type JobApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    position?: SortOrder
    description?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    notes?: SortOrder
    appliedAt?: SortOrder
    source?: SortOrder
    cvFile?: SortOrder
    coverLetterFile?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type JobApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    position?: SortOrder
    description?: SortOrder
    status?: SortOrder
    salary?: SortOrder
    notes?: SortOrder
    appliedAt?: SortOrder
    source?: SortOrder
    cvFile?: SortOrder
    coverLetterFile?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStepStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusFilter<$PrismaModel> | $Enums.StepStatus
  }

  export type JobApplicationsScalarRelationFilter = {
    is?: JobApplicationsWhereInput
    isNot?: JobApplicationsWhereInput
  }

  export type HRContactsNullableScalarRelationFilter = {
    is?: HRContactsWhereInput | null
    isNot?: HRContactsWhereInput | null
  }

  export type InterviewStepsCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    location?: SortOrder
    interviewer?: SortOrder
    feedback?: SortOrder
    reminderAt?: SortOrder
    hrContactId?: SortOrder
  }

  export type InterviewStepsMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    location?: SortOrder
    interviewer?: SortOrder
    feedback?: SortOrder
    reminderAt?: SortOrder
    hrContactId?: SortOrder
  }

  export type InterviewStepsMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    location?: SortOrder
    interviewer?: SortOrder
    feedback?: SortOrder
    reminderAt?: SortOrder
    hrContactId?: SortOrder
  }

  export type EnumStepStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusWithAggregatesFilter<$PrismaModel> | $Enums.StepStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStepStatusFilter<$PrismaModel>
    _max?: NestedEnumStepStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobApplicationsCreateWithoutCompanyInput, JobApplicationsUncheckedCreateWithoutCompanyInput> | JobApplicationsCreateWithoutCompanyInput[] | JobApplicationsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutCompanyInput | JobApplicationsCreateOrConnectWithoutCompanyInput[]
    createMany?: JobApplicationsCreateManyCompanyInputEnvelope
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
  }

  export type HRContactsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<HRContactsCreateWithoutCompanyInput, HRContactsUncheckedCreateWithoutCompanyInput> | HRContactsCreateWithoutCompanyInput[] | HRContactsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutCompanyInput | HRContactsCreateOrConnectWithoutCompanyInput[]
    createMany?: HRContactsCreateManyCompanyInputEnvelope
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
  }

  export type JobApplicationsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<JobApplicationsCreateWithoutCompanyInput, JobApplicationsUncheckedCreateWithoutCompanyInput> | JobApplicationsCreateWithoutCompanyInput[] | JobApplicationsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutCompanyInput | JobApplicationsCreateOrConnectWithoutCompanyInput[]
    createMany?: JobApplicationsCreateManyCompanyInputEnvelope
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
  }

  export type HRContactsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<HRContactsCreateWithoutCompanyInput, HRContactsUncheckedCreateWithoutCompanyInput> | HRContactsCreateWithoutCompanyInput[] | HRContactsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutCompanyInput | HRContactsCreateOrConnectWithoutCompanyInput[]
    createMany?: HRContactsCreateManyCompanyInputEnvelope
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobApplicationsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobApplicationsCreateWithoutCompanyInput, JobApplicationsUncheckedCreateWithoutCompanyInput> | JobApplicationsCreateWithoutCompanyInput[] | JobApplicationsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutCompanyInput | JobApplicationsCreateOrConnectWithoutCompanyInput[]
    upsert?: JobApplicationsUpsertWithWhereUniqueWithoutCompanyInput | JobApplicationsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobApplicationsCreateManyCompanyInputEnvelope
    set?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    disconnect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    delete?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    update?: JobApplicationsUpdateWithWhereUniqueWithoutCompanyInput | JobApplicationsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobApplicationsUpdateManyWithWhereWithoutCompanyInput | JobApplicationsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobApplicationsScalarWhereInput | JobApplicationsScalarWhereInput[]
  }

  export type HRContactsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<HRContactsCreateWithoutCompanyInput, HRContactsUncheckedCreateWithoutCompanyInput> | HRContactsCreateWithoutCompanyInput[] | HRContactsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutCompanyInput | HRContactsCreateOrConnectWithoutCompanyInput[]
    upsert?: HRContactsUpsertWithWhereUniqueWithoutCompanyInput | HRContactsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: HRContactsCreateManyCompanyInputEnvelope
    set?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    disconnect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    delete?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    update?: HRContactsUpdateWithWhereUniqueWithoutCompanyInput | HRContactsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: HRContactsUpdateManyWithWhereWithoutCompanyInput | HRContactsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: HRContactsScalarWhereInput | HRContactsScalarWhereInput[]
  }

  export type JobApplicationsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<JobApplicationsCreateWithoutCompanyInput, JobApplicationsUncheckedCreateWithoutCompanyInput> | JobApplicationsCreateWithoutCompanyInput[] | JobApplicationsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutCompanyInput | JobApplicationsCreateOrConnectWithoutCompanyInput[]
    upsert?: JobApplicationsUpsertWithWhereUniqueWithoutCompanyInput | JobApplicationsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: JobApplicationsCreateManyCompanyInputEnvelope
    set?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    disconnect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    delete?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    update?: JobApplicationsUpdateWithWhereUniqueWithoutCompanyInput | JobApplicationsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: JobApplicationsUpdateManyWithWhereWithoutCompanyInput | JobApplicationsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: JobApplicationsScalarWhereInput | JobApplicationsScalarWhereInput[]
  }

  export type HRContactsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<HRContactsCreateWithoutCompanyInput, HRContactsUncheckedCreateWithoutCompanyInput> | HRContactsCreateWithoutCompanyInput[] | HRContactsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutCompanyInput | HRContactsCreateOrConnectWithoutCompanyInput[]
    upsert?: HRContactsUpsertWithWhereUniqueWithoutCompanyInput | HRContactsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: HRContactsCreateManyCompanyInputEnvelope
    set?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    disconnect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    delete?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    update?: HRContactsUpdateWithWhereUniqueWithoutCompanyInput | HRContactsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: HRContactsUpdateManyWithWhereWithoutCompanyInput | HRContactsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: HRContactsScalarWhereInput | HRContactsScalarWhereInput[]
  }

  export type CompaniesCreateNestedOneWithoutContactsInput = {
    create?: XOR<CompaniesCreateWithoutContactsInput, CompaniesUncheckedCreateWithoutContactsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutContactsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type JobApplicationsCreateNestedManyWithoutHrContactsInput = {
    create?: XOR<JobApplicationsCreateWithoutHrContactsInput, JobApplicationsUncheckedCreateWithoutHrContactsInput> | JobApplicationsCreateWithoutHrContactsInput[] | JobApplicationsUncheckedCreateWithoutHrContactsInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutHrContactsInput | JobApplicationsCreateOrConnectWithoutHrContactsInput[]
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
  }

  export type InterviewStepsCreateNestedManyWithoutHrContactInput = {
    create?: XOR<InterviewStepsCreateWithoutHrContactInput, InterviewStepsUncheckedCreateWithoutHrContactInput> | InterviewStepsCreateWithoutHrContactInput[] | InterviewStepsUncheckedCreateWithoutHrContactInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutHrContactInput | InterviewStepsCreateOrConnectWithoutHrContactInput[]
    createMany?: InterviewStepsCreateManyHrContactInputEnvelope
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
  }

  export type JobApplicationsUncheckedCreateNestedManyWithoutHrContactsInput = {
    create?: XOR<JobApplicationsCreateWithoutHrContactsInput, JobApplicationsUncheckedCreateWithoutHrContactsInput> | JobApplicationsCreateWithoutHrContactsInput[] | JobApplicationsUncheckedCreateWithoutHrContactsInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutHrContactsInput | JobApplicationsCreateOrConnectWithoutHrContactsInput[]
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
  }

  export type InterviewStepsUncheckedCreateNestedManyWithoutHrContactInput = {
    create?: XOR<InterviewStepsCreateWithoutHrContactInput, InterviewStepsUncheckedCreateWithoutHrContactInput> | InterviewStepsCreateWithoutHrContactInput[] | InterviewStepsUncheckedCreateWithoutHrContactInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutHrContactInput | InterviewStepsCreateOrConnectWithoutHrContactInput[]
    createMany?: InterviewStepsCreateManyHrContactInputEnvelope
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
  }

  export type CompaniesUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<CompaniesCreateWithoutContactsInput, CompaniesUncheckedCreateWithoutContactsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutContactsInput
    upsert?: CompaniesUpsertWithoutContactsInput
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutContactsInput, CompaniesUpdateWithoutContactsInput>, CompaniesUncheckedUpdateWithoutContactsInput>
  }

  export type JobApplicationsUpdateManyWithoutHrContactsNestedInput = {
    create?: XOR<JobApplicationsCreateWithoutHrContactsInput, JobApplicationsUncheckedCreateWithoutHrContactsInput> | JobApplicationsCreateWithoutHrContactsInput[] | JobApplicationsUncheckedCreateWithoutHrContactsInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutHrContactsInput | JobApplicationsCreateOrConnectWithoutHrContactsInput[]
    upsert?: JobApplicationsUpsertWithWhereUniqueWithoutHrContactsInput | JobApplicationsUpsertWithWhereUniqueWithoutHrContactsInput[]
    set?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    disconnect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    delete?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    update?: JobApplicationsUpdateWithWhereUniqueWithoutHrContactsInput | JobApplicationsUpdateWithWhereUniqueWithoutHrContactsInput[]
    updateMany?: JobApplicationsUpdateManyWithWhereWithoutHrContactsInput | JobApplicationsUpdateManyWithWhereWithoutHrContactsInput[]
    deleteMany?: JobApplicationsScalarWhereInput | JobApplicationsScalarWhereInput[]
  }

  export type InterviewStepsUpdateManyWithoutHrContactNestedInput = {
    create?: XOR<InterviewStepsCreateWithoutHrContactInput, InterviewStepsUncheckedCreateWithoutHrContactInput> | InterviewStepsCreateWithoutHrContactInput[] | InterviewStepsUncheckedCreateWithoutHrContactInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutHrContactInput | InterviewStepsCreateOrConnectWithoutHrContactInput[]
    upsert?: InterviewStepsUpsertWithWhereUniqueWithoutHrContactInput | InterviewStepsUpsertWithWhereUniqueWithoutHrContactInput[]
    createMany?: InterviewStepsCreateManyHrContactInputEnvelope
    set?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    disconnect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    delete?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    update?: InterviewStepsUpdateWithWhereUniqueWithoutHrContactInput | InterviewStepsUpdateWithWhereUniqueWithoutHrContactInput[]
    updateMany?: InterviewStepsUpdateManyWithWhereWithoutHrContactInput | InterviewStepsUpdateManyWithWhereWithoutHrContactInput[]
    deleteMany?: InterviewStepsScalarWhereInput | InterviewStepsScalarWhereInput[]
  }

  export type JobApplicationsUncheckedUpdateManyWithoutHrContactsNestedInput = {
    create?: XOR<JobApplicationsCreateWithoutHrContactsInput, JobApplicationsUncheckedCreateWithoutHrContactsInput> | JobApplicationsCreateWithoutHrContactsInput[] | JobApplicationsUncheckedCreateWithoutHrContactsInput[]
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutHrContactsInput | JobApplicationsCreateOrConnectWithoutHrContactsInput[]
    upsert?: JobApplicationsUpsertWithWhereUniqueWithoutHrContactsInput | JobApplicationsUpsertWithWhereUniqueWithoutHrContactsInput[]
    set?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    disconnect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    delete?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    connect?: JobApplicationsWhereUniqueInput | JobApplicationsWhereUniqueInput[]
    update?: JobApplicationsUpdateWithWhereUniqueWithoutHrContactsInput | JobApplicationsUpdateWithWhereUniqueWithoutHrContactsInput[]
    updateMany?: JobApplicationsUpdateManyWithWhereWithoutHrContactsInput | JobApplicationsUpdateManyWithWhereWithoutHrContactsInput[]
    deleteMany?: JobApplicationsScalarWhereInput | JobApplicationsScalarWhereInput[]
  }

  export type InterviewStepsUncheckedUpdateManyWithoutHrContactNestedInput = {
    create?: XOR<InterviewStepsCreateWithoutHrContactInput, InterviewStepsUncheckedCreateWithoutHrContactInput> | InterviewStepsCreateWithoutHrContactInput[] | InterviewStepsUncheckedCreateWithoutHrContactInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutHrContactInput | InterviewStepsCreateOrConnectWithoutHrContactInput[]
    upsert?: InterviewStepsUpsertWithWhereUniqueWithoutHrContactInput | InterviewStepsUpsertWithWhereUniqueWithoutHrContactInput[]
    createMany?: InterviewStepsCreateManyHrContactInputEnvelope
    set?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    disconnect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    delete?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    update?: InterviewStepsUpdateWithWhereUniqueWithoutHrContactInput | InterviewStepsUpdateWithWhereUniqueWithoutHrContactInput[]
    updateMany?: InterviewStepsUpdateManyWithWhereWithoutHrContactInput | InterviewStepsUpdateManyWithWhereWithoutHrContactInput[]
    deleteMany?: InterviewStepsScalarWhereInput | InterviewStepsScalarWhereInput[]
  }

  export type CompaniesCreateNestedOneWithoutJobsInput = {
    create?: XOR<CompaniesCreateWithoutJobsInput, CompaniesUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutJobsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type InterviewStepsCreateNestedManyWithoutJobInput = {
    create?: XOR<InterviewStepsCreateWithoutJobInput, InterviewStepsUncheckedCreateWithoutJobInput> | InterviewStepsCreateWithoutJobInput[] | InterviewStepsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutJobInput | InterviewStepsCreateOrConnectWithoutJobInput[]
    createMany?: InterviewStepsCreateManyJobInputEnvelope
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
  }

  export type HRContactsCreateNestedManyWithoutJobsInput = {
    create?: XOR<HRContactsCreateWithoutJobsInput, HRContactsUncheckedCreateWithoutJobsInput> | HRContactsCreateWithoutJobsInput[] | HRContactsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutJobsInput | HRContactsCreateOrConnectWithoutJobsInput[]
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
  }

  export type InterviewStepsUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<InterviewStepsCreateWithoutJobInput, InterviewStepsUncheckedCreateWithoutJobInput> | InterviewStepsCreateWithoutJobInput[] | InterviewStepsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutJobInput | InterviewStepsCreateOrConnectWithoutJobInput[]
    createMany?: InterviewStepsCreateManyJobInputEnvelope
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
  }

  export type HRContactsUncheckedCreateNestedManyWithoutJobsInput = {
    create?: XOR<HRContactsCreateWithoutJobsInput, HRContactsUncheckedCreateWithoutJobsInput> | HRContactsCreateWithoutJobsInput[] | HRContactsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutJobsInput | HRContactsCreateOrConnectWithoutJobsInput[]
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompaniesUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<CompaniesCreateWithoutJobsInput, CompaniesUncheckedCreateWithoutJobsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutJobsInput
    upsert?: CompaniesUpsertWithoutJobsInput
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutJobsInput, CompaniesUpdateWithoutJobsInput>, CompaniesUncheckedUpdateWithoutJobsInput>
  }

  export type InterviewStepsUpdateManyWithoutJobNestedInput = {
    create?: XOR<InterviewStepsCreateWithoutJobInput, InterviewStepsUncheckedCreateWithoutJobInput> | InterviewStepsCreateWithoutJobInput[] | InterviewStepsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutJobInput | InterviewStepsCreateOrConnectWithoutJobInput[]
    upsert?: InterviewStepsUpsertWithWhereUniqueWithoutJobInput | InterviewStepsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: InterviewStepsCreateManyJobInputEnvelope
    set?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    disconnect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    delete?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    update?: InterviewStepsUpdateWithWhereUniqueWithoutJobInput | InterviewStepsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: InterviewStepsUpdateManyWithWhereWithoutJobInput | InterviewStepsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: InterviewStepsScalarWhereInput | InterviewStepsScalarWhereInput[]
  }

  export type HRContactsUpdateManyWithoutJobsNestedInput = {
    create?: XOR<HRContactsCreateWithoutJobsInput, HRContactsUncheckedCreateWithoutJobsInput> | HRContactsCreateWithoutJobsInput[] | HRContactsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutJobsInput | HRContactsCreateOrConnectWithoutJobsInput[]
    upsert?: HRContactsUpsertWithWhereUniqueWithoutJobsInput | HRContactsUpsertWithWhereUniqueWithoutJobsInput[]
    set?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    disconnect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    delete?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    update?: HRContactsUpdateWithWhereUniqueWithoutJobsInput | HRContactsUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: HRContactsUpdateManyWithWhereWithoutJobsInput | HRContactsUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: HRContactsScalarWhereInput | HRContactsScalarWhereInput[]
  }

  export type InterviewStepsUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<InterviewStepsCreateWithoutJobInput, InterviewStepsUncheckedCreateWithoutJobInput> | InterviewStepsCreateWithoutJobInput[] | InterviewStepsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewStepsCreateOrConnectWithoutJobInput | InterviewStepsCreateOrConnectWithoutJobInput[]
    upsert?: InterviewStepsUpsertWithWhereUniqueWithoutJobInput | InterviewStepsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: InterviewStepsCreateManyJobInputEnvelope
    set?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    disconnect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    delete?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    connect?: InterviewStepsWhereUniqueInput | InterviewStepsWhereUniqueInput[]
    update?: InterviewStepsUpdateWithWhereUniqueWithoutJobInput | InterviewStepsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: InterviewStepsUpdateManyWithWhereWithoutJobInput | InterviewStepsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: InterviewStepsScalarWhereInput | InterviewStepsScalarWhereInput[]
  }

  export type HRContactsUncheckedUpdateManyWithoutJobsNestedInput = {
    create?: XOR<HRContactsCreateWithoutJobsInput, HRContactsUncheckedCreateWithoutJobsInput> | HRContactsCreateWithoutJobsInput[] | HRContactsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: HRContactsCreateOrConnectWithoutJobsInput | HRContactsCreateOrConnectWithoutJobsInput[]
    upsert?: HRContactsUpsertWithWhereUniqueWithoutJobsInput | HRContactsUpsertWithWhereUniqueWithoutJobsInput[]
    set?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    disconnect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    delete?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    connect?: HRContactsWhereUniqueInput | HRContactsWhereUniqueInput[]
    update?: HRContactsUpdateWithWhereUniqueWithoutJobsInput | HRContactsUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: HRContactsUpdateManyWithWhereWithoutJobsInput | HRContactsUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: HRContactsScalarWhereInput | HRContactsScalarWhereInput[]
  }

  export type JobApplicationsCreateNestedOneWithoutStepsInput = {
    create?: XOR<JobApplicationsCreateWithoutStepsInput, JobApplicationsUncheckedCreateWithoutStepsInput>
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutStepsInput
    connect?: JobApplicationsWhereUniqueInput
  }

  export type HRContactsCreateNestedOneWithoutStepsInput = {
    create?: XOR<HRContactsCreateWithoutStepsInput, HRContactsUncheckedCreateWithoutStepsInput>
    connectOrCreate?: HRContactsCreateOrConnectWithoutStepsInput
    connect?: HRContactsWhereUniqueInput
  }

  export type EnumStepStatusFieldUpdateOperationsInput = {
    set?: $Enums.StepStatus
  }

  export type JobApplicationsUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<JobApplicationsCreateWithoutStepsInput, JobApplicationsUncheckedCreateWithoutStepsInput>
    connectOrCreate?: JobApplicationsCreateOrConnectWithoutStepsInput
    upsert?: JobApplicationsUpsertWithoutStepsInput
    connect?: JobApplicationsWhereUniqueInput
    update?: XOR<XOR<JobApplicationsUpdateToOneWithWhereWithoutStepsInput, JobApplicationsUpdateWithoutStepsInput>, JobApplicationsUncheckedUpdateWithoutStepsInput>
  }

  export type HRContactsUpdateOneWithoutStepsNestedInput = {
    create?: XOR<HRContactsCreateWithoutStepsInput, HRContactsUncheckedCreateWithoutStepsInput>
    connectOrCreate?: HRContactsCreateOrConnectWithoutStepsInput
    upsert?: HRContactsUpsertWithoutStepsInput
    disconnect?: HRContactsWhereInput | boolean
    delete?: HRContactsWhereInput | boolean
    connect?: HRContactsWhereUniqueInput
    update?: XOR<XOR<HRContactsUpdateToOneWithWhereWithoutStepsInput, HRContactsUpdateWithoutStepsInput>, HRContactsUncheckedUpdateWithoutStepsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStepStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusFilter<$PrismaModel> | $Enums.StepStatus
  }

  export type NestedEnumStepStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusWithAggregatesFilter<$PrismaModel> | $Enums.StepStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStepStatusFilter<$PrismaModel>
    _max?: NestedEnumStepStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type JobApplicationsCreateWithoutCompanyInput = {
    id?: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    steps?: InterviewStepsCreateNestedManyWithoutJobInput
    hrContacts?: HRContactsCreateNestedManyWithoutJobsInput
  }

  export type JobApplicationsUncheckedCreateWithoutCompanyInput = {
    id?: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    steps?: InterviewStepsUncheckedCreateNestedManyWithoutJobInput
    hrContacts?: HRContactsUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobApplicationsCreateOrConnectWithoutCompanyInput = {
    where: JobApplicationsWhereUniqueInput
    create: XOR<JobApplicationsCreateWithoutCompanyInput, JobApplicationsUncheckedCreateWithoutCompanyInput>
  }

  export type JobApplicationsCreateManyCompanyInputEnvelope = {
    data: JobApplicationsCreateManyCompanyInput | JobApplicationsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type HRContactsCreateWithoutCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsCreateNestedManyWithoutHrContactsInput
    steps?: InterviewStepsCreateNestedManyWithoutHrContactInput
  }

  export type HRContactsUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsUncheckedCreateNestedManyWithoutHrContactsInput
    steps?: InterviewStepsUncheckedCreateNestedManyWithoutHrContactInput
  }

  export type HRContactsCreateOrConnectWithoutCompanyInput = {
    where: HRContactsWhereUniqueInput
    create: XOR<HRContactsCreateWithoutCompanyInput, HRContactsUncheckedCreateWithoutCompanyInput>
  }

  export type HRContactsCreateManyCompanyInputEnvelope = {
    data: HRContactsCreateManyCompanyInput | HRContactsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type JobApplicationsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobApplicationsWhereUniqueInput
    update: XOR<JobApplicationsUpdateWithoutCompanyInput, JobApplicationsUncheckedUpdateWithoutCompanyInput>
    create: XOR<JobApplicationsCreateWithoutCompanyInput, JobApplicationsUncheckedCreateWithoutCompanyInput>
  }

  export type JobApplicationsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobApplicationsWhereUniqueInput
    data: XOR<JobApplicationsUpdateWithoutCompanyInput, JobApplicationsUncheckedUpdateWithoutCompanyInput>
  }

  export type JobApplicationsUpdateManyWithWhereWithoutCompanyInput = {
    where: JobApplicationsScalarWhereInput
    data: XOR<JobApplicationsUpdateManyMutationInput, JobApplicationsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type JobApplicationsScalarWhereInput = {
    AND?: JobApplicationsScalarWhereInput | JobApplicationsScalarWhereInput[]
    OR?: JobApplicationsScalarWhereInput[]
    NOT?: JobApplicationsScalarWhereInput | JobApplicationsScalarWhereInput[]
    id?: StringFilter<"JobApplications"> | string
    companyId?: StringFilter<"JobApplications"> | string
    position?: StringFilter<"JobApplications"> | string
    description?: StringNullableFilter<"JobApplications"> | string | null
    status?: EnumApplicationStatusFilter<"JobApplications"> | $Enums.ApplicationStatus
    salary?: StringNullableFilter<"JobApplications"> | string | null
    notes?: StringNullableFilter<"JobApplications"> | string | null
    appliedAt?: DateTimeNullableFilter<"JobApplications"> | Date | string | null
    source?: StringNullableFilter<"JobApplications"> | string | null
    cvFile?: StringNullableFilter<"JobApplications"> | string | null
    coverLetterFile?: StringNullableFilter<"JobApplications"> | string | null
    userId?: StringNullableFilter<"JobApplications"> | string | null
    createdAt?: DateTimeFilter<"JobApplications"> | Date | string
  }

  export type HRContactsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: HRContactsWhereUniqueInput
    update: XOR<HRContactsUpdateWithoutCompanyInput, HRContactsUncheckedUpdateWithoutCompanyInput>
    create: XOR<HRContactsCreateWithoutCompanyInput, HRContactsUncheckedCreateWithoutCompanyInput>
  }

  export type HRContactsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: HRContactsWhereUniqueInput
    data: XOR<HRContactsUpdateWithoutCompanyInput, HRContactsUncheckedUpdateWithoutCompanyInput>
  }

  export type HRContactsUpdateManyWithWhereWithoutCompanyInput = {
    where: HRContactsScalarWhereInput
    data: XOR<HRContactsUpdateManyMutationInput, HRContactsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type HRContactsScalarWhereInput = {
    AND?: HRContactsScalarWhereInput | HRContactsScalarWhereInput[]
    OR?: HRContactsScalarWhereInput[]
    NOT?: HRContactsScalarWhereInput | HRContactsScalarWhereInput[]
    id?: StringFilter<"HRContacts"> | string
    companyId?: StringFilter<"HRContacts"> | string
    name?: StringFilter<"HRContacts"> | string
    email?: StringNullableFilter<"HRContacts"> | string | null
    phone?: StringNullableFilter<"HRContacts"> | string | null
    role?: StringNullableFilter<"HRContacts"> | string | null
    notes?: StringNullableFilter<"HRContacts"> | string | null
    linkedin?: StringNullableFilter<"HRContacts"> | string | null
    createdAt?: DateTimeFilter<"HRContacts"> | Date | string
  }

  export type CompaniesCreateWithoutContactsInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesCreateOrConnectWithoutContactsInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutContactsInput, CompaniesUncheckedCreateWithoutContactsInput>
  }

  export type JobApplicationsCreateWithoutHrContactsInput = {
    id?: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    company: CompaniesCreateNestedOneWithoutJobsInput
    steps?: InterviewStepsCreateNestedManyWithoutJobInput
  }

  export type JobApplicationsUncheckedCreateWithoutHrContactsInput = {
    id?: string
    companyId: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    steps?: InterviewStepsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobApplicationsCreateOrConnectWithoutHrContactsInput = {
    where: JobApplicationsWhereUniqueInput
    create: XOR<JobApplicationsCreateWithoutHrContactsInput, JobApplicationsUncheckedCreateWithoutHrContactsInput>
  }

  export type InterviewStepsCreateWithoutHrContactInput = {
    id?: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    job: JobApplicationsCreateNestedOneWithoutStepsInput
  }

  export type InterviewStepsUncheckedCreateWithoutHrContactInput = {
    id?: string
    jobId: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
  }

  export type InterviewStepsCreateOrConnectWithoutHrContactInput = {
    where: InterviewStepsWhereUniqueInput
    create: XOR<InterviewStepsCreateWithoutHrContactInput, InterviewStepsUncheckedCreateWithoutHrContactInput>
  }

  export type InterviewStepsCreateManyHrContactInputEnvelope = {
    data: InterviewStepsCreateManyHrContactInput | InterviewStepsCreateManyHrContactInput[]
    skipDuplicates?: boolean
  }

  export type CompaniesUpsertWithoutContactsInput = {
    update: XOR<CompaniesUpdateWithoutContactsInput, CompaniesUncheckedUpdateWithoutContactsInput>
    create: XOR<CompaniesCreateWithoutContactsInput, CompaniesUncheckedCreateWithoutContactsInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutContactsInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutContactsInput, CompaniesUncheckedUpdateWithoutContactsInput>
  }

  export type CompaniesUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type JobApplicationsUpsertWithWhereUniqueWithoutHrContactsInput = {
    where: JobApplicationsWhereUniqueInput
    update: XOR<JobApplicationsUpdateWithoutHrContactsInput, JobApplicationsUncheckedUpdateWithoutHrContactsInput>
    create: XOR<JobApplicationsCreateWithoutHrContactsInput, JobApplicationsUncheckedCreateWithoutHrContactsInput>
  }

  export type JobApplicationsUpdateWithWhereUniqueWithoutHrContactsInput = {
    where: JobApplicationsWhereUniqueInput
    data: XOR<JobApplicationsUpdateWithoutHrContactsInput, JobApplicationsUncheckedUpdateWithoutHrContactsInput>
  }

  export type JobApplicationsUpdateManyWithWhereWithoutHrContactsInput = {
    where: JobApplicationsScalarWhereInput
    data: XOR<JobApplicationsUpdateManyMutationInput, JobApplicationsUncheckedUpdateManyWithoutHrContactsInput>
  }

  export type InterviewStepsUpsertWithWhereUniqueWithoutHrContactInput = {
    where: InterviewStepsWhereUniqueInput
    update: XOR<InterviewStepsUpdateWithoutHrContactInput, InterviewStepsUncheckedUpdateWithoutHrContactInput>
    create: XOR<InterviewStepsCreateWithoutHrContactInput, InterviewStepsUncheckedCreateWithoutHrContactInput>
  }

  export type InterviewStepsUpdateWithWhereUniqueWithoutHrContactInput = {
    where: InterviewStepsWhereUniqueInput
    data: XOR<InterviewStepsUpdateWithoutHrContactInput, InterviewStepsUncheckedUpdateWithoutHrContactInput>
  }

  export type InterviewStepsUpdateManyWithWhereWithoutHrContactInput = {
    where: InterviewStepsScalarWhereInput
    data: XOR<InterviewStepsUpdateManyMutationInput, InterviewStepsUncheckedUpdateManyWithoutHrContactInput>
  }

  export type InterviewStepsScalarWhereInput = {
    AND?: InterviewStepsScalarWhereInput | InterviewStepsScalarWhereInput[]
    OR?: InterviewStepsScalarWhereInput[]
    NOT?: InterviewStepsScalarWhereInput | InterviewStepsScalarWhereInput[]
    id?: StringFilter<"InterviewSteps"> | string
    jobId?: StringFilter<"InterviewSteps"> | string
    title?: StringFilter<"InterviewSteps"> | string
    date?: DateTimeFilter<"InterviewSteps"> | Date | string
    status?: EnumStepStatusFilter<"InterviewSteps"> | $Enums.StepStatus
    notes?: StringNullableFilter<"InterviewSteps"> | string | null
    location?: StringNullableFilter<"InterviewSteps"> | string | null
    interviewer?: StringNullableFilter<"InterviewSteps"> | string | null
    feedback?: StringNullableFilter<"InterviewSteps"> | string | null
    reminderAt?: DateTimeNullableFilter<"InterviewSteps"> | Date | string | null
    hrContactId?: StringNullableFilter<"InterviewSteps"> | string | null
  }

  export type CompaniesCreateWithoutJobsInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
    contacts?: HRContactsCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateWithoutJobsInput = {
    id?: string
    name: string
    location?: string | null
    website?: string | null
    industry?: string | null
    size?: string | null
    logo?: string | null
    createdAt?: Date | string
    contacts?: HRContactsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesCreateOrConnectWithoutJobsInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutJobsInput, CompaniesUncheckedCreateWithoutJobsInput>
  }

  export type InterviewStepsCreateWithoutJobInput = {
    id?: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    hrContact?: HRContactsCreateNestedOneWithoutStepsInput
  }

  export type InterviewStepsUncheckedCreateWithoutJobInput = {
    id?: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    hrContactId?: string | null
  }

  export type InterviewStepsCreateOrConnectWithoutJobInput = {
    where: InterviewStepsWhereUniqueInput
    create: XOR<InterviewStepsCreateWithoutJobInput, InterviewStepsUncheckedCreateWithoutJobInput>
  }

  export type InterviewStepsCreateManyJobInputEnvelope = {
    data: InterviewStepsCreateManyJobInput | InterviewStepsCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type HRContactsCreateWithoutJobsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    company: CompaniesCreateNestedOneWithoutContactsInput
    steps?: InterviewStepsCreateNestedManyWithoutHrContactInput
  }

  export type HRContactsUncheckedCreateWithoutJobsInput = {
    id?: string
    companyId: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    steps?: InterviewStepsUncheckedCreateNestedManyWithoutHrContactInput
  }

  export type HRContactsCreateOrConnectWithoutJobsInput = {
    where: HRContactsWhereUniqueInput
    create: XOR<HRContactsCreateWithoutJobsInput, HRContactsUncheckedCreateWithoutJobsInput>
  }

  export type CompaniesUpsertWithoutJobsInput = {
    update: XOR<CompaniesUpdateWithoutJobsInput, CompaniesUncheckedUpdateWithoutJobsInput>
    create: XOR<CompaniesCreateWithoutJobsInput, CompaniesUncheckedCreateWithoutJobsInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutJobsInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutJobsInput, CompaniesUncheckedUpdateWithoutJobsInput>
  }

  export type CompaniesUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: HRContactsUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: HRContactsUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type InterviewStepsUpsertWithWhereUniqueWithoutJobInput = {
    where: InterviewStepsWhereUniqueInput
    update: XOR<InterviewStepsUpdateWithoutJobInput, InterviewStepsUncheckedUpdateWithoutJobInput>
    create: XOR<InterviewStepsCreateWithoutJobInput, InterviewStepsUncheckedCreateWithoutJobInput>
  }

  export type InterviewStepsUpdateWithWhereUniqueWithoutJobInput = {
    where: InterviewStepsWhereUniqueInput
    data: XOR<InterviewStepsUpdateWithoutJobInput, InterviewStepsUncheckedUpdateWithoutJobInput>
  }

  export type InterviewStepsUpdateManyWithWhereWithoutJobInput = {
    where: InterviewStepsScalarWhereInput
    data: XOR<InterviewStepsUpdateManyMutationInput, InterviewStepsUncheckedUpdateManyWithoutJobInput>
  }

  export type HRContactsUpsertWithWhereUniqueWithoutJobsInput = {
    where: HRContactsWhereUniqueInput
    update: XOR<HRContactsUpdateWithoutJobsInput, HRContactsUncheckedUpdateWithoutJobsInput>
    create: XOR<HRContactsCreateWithoutJobsInput, HRContactsUncheckedCreateWithoutJobsInput>
  }

  export type HRContactsUpdateWithWhereUniqueWithoutJobsInput = {
    where: HRContactsWhereUniqueInput
    data: XOR<HRContactsUpdateWithoutJobsInput, HRContactsUncheckedUpdateWithoutJobsInput>
  }

  export type HRContactsUpdateManyWithWhereWithoutJobsInput = {
    where: HRContactsScalarWhereInput
    data: XOR<HRContactsUpdateManyMutationInput, HRContactsUncheckedUpdateManyWithoutJobsInput>
  }

  export type JobApplicationsCreateWithoutStepsInput = {
    id?: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    company: CompaniesCreateNestedOneWithoutJobsInput
    hrContacts?: HRContactsCreateNestedManyWithoutJobsInput
  }

  export type JobApplicationsUncheckedCreateWithoutStepsInput = {
    id?: string
    companyId: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
    hrContacts?: HRContactsUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobApplicationsCreateOrConnectWithoutStepsInput = {
    where: JobApplicationsWhereUniqueInput
    create: XOR<JobApplicationsCreateWithoutStepsInput, JobApplicationsUncheckedCreateWithoutStepsInput>
  }

  export type HRContactsCreateWithoutStepsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    company: CompaniesCreateNestedOneWithoutContactsInput
    jobs?: JobApplicationsCreateNestedManyWithoutHrContactsInput
  }

  export type HRContactsUncheckedCreateWithoutStepsInput = {
    id?: string
    companyId: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
    jobs?: JobApplicationsUncheckedCreateNestedManyWithoutHrContactsInput
  }

  export type HRContactsCreateOrConnectWithoutStepsInput = {
    where: HRContactsWhereUniqueInput
    create: XOR<HRContactsCreateWithoutStepsInput, HRContactsUncheckedCreateWithoutStepsInput>
  }

  export type JobApplicationsUpsertWithoutStepsInput = {
    update: XOR<JobApplicationsUpdateWithoutStepsInput, JobApplicationsUncheckedUpdateWithoutStepsInput>
    create: XOR<JobApplicationsCreateWithoutStepsInput, JobApplicationsUncheckedCreateWithoutStepsInput>
    where?: JobApplicationsWhereInput
  }

  export type JobApplicationsUpdateToOneWithWhereWithoutStepsInput = {
    where?: JobApplicationsWhereInput
    data: XOR<JobApplicationsUpdateWithoutStepsInput, JobApplicationsUncheckedUpdateWithoutStepsInput>
  }

  export type JobApplicationsUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutJobsNestedInput
    hrContacts?: HRContactsUpdateManyWithoutJobsNestedInput
  }

  export type JobApplicationsUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hrContacts?: HRContactsUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type HRContactsUpsertWithoutStepsInput = {
    update: XOR<HRContactsUpdateWithoutStepsInput, HRContactsUncheckedUpdateWithoutStepsInput>
    create: XOR<HRContactsCreateWithoutStepsInput, HRContactsUncheckedCreateWithoutStepsInput>
    where?: HRContactsWhereInput
  }

  export type HRContactsUpdateToOneWithWhereWithoutStepsInput = {
    where?: HRContactsWhereInput
    data: XOR<HRContactsUpdateWithoutStepsInput, HRContactsUncheckedUpdateWithoutStepsInput>
  }

  export type HRContactsUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutContactsNestedInput
    jobs?: JobApplicationsUpdateManyWithoutHrContactsNestedInput
  }

  export type HRContactsUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUncheckedUpdateManyWithoutHrContactsNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobApplicationsCreateManyCompanyInput = {
    id?: string
    position: string
    description?: string | null
    status?: $Enums.ApplicationStatus
    salary?: string | null
    notes?: string | null
    appliedAt?: Date | string | null
    source?: string | null
    cvFile?: string | null
    coverLetterFile?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type HRContactsCreateManyCompanyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    role?: string | null
    notes?: string | null
    linkedin?: string | null
    createdAt?: Date | string
  }

  export type JobApplicationsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: InterviewStepsUpdateManyWithoutJobNestedInput
    hrContacts?: HRContactsUpdateManyWithoutJobsNestedInput
  }

  export type JobApplicationsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: InterviewStepsUncheckedUpdateManyWithoutJobNestedInput
    hrContacts?: HRContactsUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type JobApplicationsUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HRContactsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUpdateManyWithoutHrContactsNestedInput
    steps?: InterviewStepsUpdateManyWithoutHrContactNestedInput
  }

  export type HRContactsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobApplicationsUncheckedUpdateManyWithoutHrContactsNestedInput
    steps?: InterviewStepsUncheckedUpdateManyWithoutHrContactNestedInput
  }

  export type HRContactsUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewStepsCreateManyHrContactInput = {
    id?: string
    jobId: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
  }

  export type JobApplicationsUpdateWithoutHrContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutJobsNestedInput
    steps?: InterviewStepsUpdateManyWithoutJobNestedInput
  }

  export type JobApplicationsUncheckedUpdateWithoutHrContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: InterviewStepsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobApplicationsUncheckedUpdateManyWithoutHrContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    cvFile?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetterFile?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewStepsUpdateWithoutHrContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: JobApplicationsUpdateOneRequiredWithoutStepsNestedInput
  }

  export type InterviewStepsUncheckedUpdateWithoutHrContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InterviewStepsUncheckedUpdateManyWithoutHrContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InterviewStepsCreateManyJobInput = {
    id?: string
    title: string
    date: Date | string
    status?: $Enums.StepStatus
    notes?: string | null
    location?: string | null
    interviewer?: string | null
    feedback?: string | null
    reminderAt?: Date | string | null
    hrContactId?: string | null
  }

  export type InterviewStepsUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hrContact?: HRContactsUpdateOneWithoutStepsNestedInput
  }

  export type InterviewStepsUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hrContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewStepsUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    interviewer?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reminderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hrContactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HRContactsUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneRequiredWithoutContactsNestedInput
    steps?: InterviewStepsUpdateManyWithoutHrContactNestedInput
  }

  export type HRContactsUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: InterviewStepsUncheckedUpdateManyWithoutHrContactNestedInput
  }

  export type HRContactsUncheckedUpdateManyWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}