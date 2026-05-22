
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GalleImageTag
 * 
 */
export type GalleImageTag = $Result.DefaultSelection<Prisma.$GalleImageTagPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecordDeleteStatus: {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED'
};

export type RecordDeleteStatus = (typeof RecordDeleteStatus)[keyof typeof RecordDeleteStatus]


export const RecordActiveStatus: {
  VISIBLE: 'VISIBLE',
  HIDDEN: 'HIDDEN'
};

export type RecordActiveStatus = (typeof RecordActiveStatus)[keyof typeof RecordActiveStatus]

}

export type RecordDeleteStatus = $Enums.RecordDeleteStatus

export const RecordDeleteStatus: typeof $Enums.RecordDeleteStatus

export type RecordActiveStatus = $Enums.RecordActiveStatus

export const RecordActiveStatus: typeof $Enums.RecordActiveStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleImageTag`: Exposes CRUD operations for the **GalleImageTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleImageTags
    * const galleImageTags = await prisma.galleImageTag.findMany()
    * ```
    */
  get galleImageTag(): Prisma.GalleImageTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    GalleImageTag: 'GalleImageTag',
    GalleryImage: 'GalleryImage',
    Blog: 'Blog'
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
      modelProps: "user" | "galleImageTag" | "galleryImage" | "blog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      GalleImageTag: {
        payload: Prisma.$GalleImageTagPayload<ExtArgs>
        fields: Prisma.GalleImageTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleImageTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleImageTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>
          }
          findFirst: {
            args: Prisma.GalleImageTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleImageTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>
          }
          findMany: {
            args: Prisma.GalleImageTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>[]
          }
          create: {
            args: Prisma.GalleImageTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>
          }
          createMany: {
            args: Prisma.GalleImageTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GalleImageTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>
          }
          update: {
            args: Prisma.GalleImageTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>
          }
          deleteMany: {
            args: Prisma.GalleImageTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleImageTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GalleImageTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleImageTagPayload>
          }
          aggregate: {
            args: Prisma.GalleImageTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleImageTag>
          }
          groupBy: {
            args: Prisma.GalleImageTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleImageTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleImageTagCountArgs<ExtArgs>
            result: $Utils.Optional<GalleImageTagCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    galleImageTag?: GalleImageTagOmit
    galleryImage?: GalleryImageOmit
    blog?: BlogOmit
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
   * Count Type GalleImageTagCountOutputType
   */

  export type GalleImageTagCountOutputType = {
    images: number
  }

  export type GalleImageTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | GalleImageTagCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * GalleImageTagCountOutputType without action
   */
  export type GalleImageTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTagCountOutputType
     */
    select?: GalleImageTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalleImageTagCountOutputType without action
   */
  export type GalleImageTagCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
  }


  /**
   * Model GalleImageTag
   */

  export type AggregateGalleImageTag = {
    _count: GalleImageTagCountAggregateOutputType | null
    _avg: GalleImageTagAvgAggregateOutputType | null
    _sum: GalleImageTagSumAggregateOutputType | null
    _min: GalleImageTagMinAggregateOutputType | null
    _max: GalleImageTagMaxAggregateOutputType | null
  }

  export type GalleImageTagAvgAggregateOutputType = {
    id: number | null
  }

  export type GalleImageTagSumAggregateOutputType = {
    id: number | null
  }

  export type GalleImageTagMinAggregateOutputType = {
    id: number | null
    name: string | null
    show: $Enums.RecordActiveStatus | null
    status: $Enums.RecordDeleteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleImageTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    show: $Enums.RecordActiveStatus | null
    status: $Enums.RecordDeleteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleImageTagCountAggregateOutputType = {
    id: number
    name: number
    show: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleImageTagAvgAggregateInputType = {
    id?: true
  }

  export type GalleImageTagSumAggregateInputType = {
    id?: true
  }

  export type GalleImageTagMinAggregateInputType = {
    id?: true
    name?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleImageTagMaxAggregateInputType = {
    id?: true
    name?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleImageTagCountAggregateInputType = {
    id?: true
    name?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleImageTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleImageTag to aggregate.
     */
    where?: GalleImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleImageTags to fetch.
     */
    orderBy?: GalleImageTagOrderByWithRelationInput | GalleImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleImageTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleImageTags
    **/
    _count?: true | GalleImageTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleImageTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleImageTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleImageTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleImageTagMaxAggregateInputType
  }

  export type GetGalleImageTagAggregateType<T extends GalleImageTagAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleImageTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleImageTag[P]>
      : GetScalarType<T[P], AggregateGalleImageTag[P]>
  }




  export type GalleImageTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleImageTagWhereInput
    orderBy?: GalleImageTagOrderByWithAggregationInput | GalleImageTagOrderByWithAggregationInput[]
    by: GalleImageTagScalarFieldEnum[] | GalleImageTagScalarFieldEnum
    having?: GalleImageTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleImageTagCountAggregateInputType | true
    _avg?: GalleImageTagAvgAggregateInputType
    _sum?: GalleImageTagSumAggregateInputType
    _min?: GalleImageTagMinAggregateInputType
    _max?: GalleImageTagMaxAggregateInputType
  }

  export type GalleImageTagGroupByOutputType = {
    id: number
    name: string
    show: $Enums.RecordActiveStatus
    status: $Enums.RecordDeleteStatus
    createdAt: Date
    updatedAt: Date
    _count: GalleImageTagCountAggregateOutputType | null
    _avg: GalleImageTagAvgAggregateOutputType | null
    _sum: GalleImageTagSumAggregateOutputType | null
    _min: GalleImageTagMinAggregateOutputType | null
    _max: GalleImageTagMaxAggregateOutputType | null
  }

  type GetGalleImageTagGroupByPayload<T extends GalleImageTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleImageTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleImageTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleImageTagGroupByOutputType[P]>
            : GetScalarType<T[P], GalleImageTagGroupByOutputType[P]>
        }
      >
    >


  export type GalleImageTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    show?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | GalleImageTag$imagesArgs<ExtArgs>
    _count?: boolean | GalleImageTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleImageTag"]>



  export type GalleImageTagSelectScalar = {
    id?: boolean
    name?: boolean
    show?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleImageTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "show" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["galleImageTag"]>
  export type GalleImageTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | GalleImageTag$imagesArgs<ExtArgs>
    _count?: boolean | GalleImageTagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GalleImageTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleImageTag"
    objects: {
      images: Prisma.$GalleryImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      show: $Enums.RecordActiveStatus
      status: $Enums.RecordDeleteStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleImageTag"]>
    composites: {}
  }

  type GalleImageTagGetPayload<S extends boolean | null | undefined | GalleImageTagDefaultArgs> = $Result.GetResult<Prisma.$GalleImageTagPayload, S>

  type GalleImageTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleImageTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleImageTagCountAggregateInputType | true
    }

  export interface GalleImageTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleImageTag'], meta: { name: 'GalleImageTag' } }
    /**
     * Find zero or one GalleImageTag that matches the filter.
     * @param {GalleImageTagFindUniqueArgs} args - Arguments to find a GalleImageTag
     * @example
     * // Get one GalleImageTag
     * const galleImageTag = await prisma.galleImageTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleImageTagFindUniqueArgs>(args: SelectSubset<T, GalleImageTagFindUniqueArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleImageTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleImageTagFindUniqueOrThrowArgs} args - Arguments to find a GalleImageTag
     * @example
     * // Get one GalleImageTag
     * const galleImageTag = await prisma.galleImageTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleImageTagFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleImageTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleImageTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagFindFirstArgs} args - Arguments to find a GalleImageTag
     * @example
     * // Get one GalleImageTag
     * const galleImageTag = await prisma.galleImageTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleImageTagFindFirstArgs>(args?: SelectSubset<T, GalleImageTagFindFirstArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleImageTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagFindFirstOrThrowArgs} args - Arguments to find a GalleImageTag
     * @example
     * // Get one GalleImageTag
     * const galleImageTag = await prisma.galleImageTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleImageTagFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleImageTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleImageTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleImageTags
     * const galleImageTags = await prisma.galleImageTag.findMany()
     * 
     * // Get first 10 GalleImageTags
     * const galleImageTags = await prisma.galleImageTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleImageTagWithIdOnly = await prisma.galleImageTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleImageTagFindManyArgs>(args?: SelectSubset<T, GalleImageTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleImageTag.
     * @param {GalleImageTagCreateArgs} args - Arguments to create a GalleImageTag.
     * @example
     * // Create one GalleImageTag
     * const GalleImageTag = await prisma.galleImageTag.create({
     *   data: {
     *     // ... data to create a GalleImageTag
     *   }
     * })
     * 
     */
    create<T extends GalleImageTagCreateArgs>(args: SelectSubset<T, GalleImageTagCreateArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleImageTags.
     * @param {GalleImageTagCreateManyArgs} args - Arguments to create many GalleImageTags.
     * @example
     * // Create many GalleImageTags
     * const galleImageTag = await prisma.galleImageTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleImageTagCreateManyArgs>(args?: SelectSubset<T, GalleImageTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GalleImageTag.
     * @param {GalleImageTagDeleteArgs} args - Arguments to delete one GalleImageTag.
     * @example
     * // Delete one GalleImageTag
     * const GalleImageTag = await prisma.galleImageTag.delete({
     *   where: {
     *     // ... filter to delete one GalleImageTag
     *   }
     * })
     * 
     */
    delete<T extends GalleImageTagDeleteArgs>(args: SelectSubset<T, GalleImageTagDeleteArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleImageTag.
     * @param {GalleImageTagUpdateArgs} args - Arguments to update one GalleImageTag.
     * @example
     * // Update one GalleImageTag
     * const galleImageTag = await prisma.galleImageTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleImageTagUpdateArgs>(args: SelectSubset<T, GalleImageTagUpdateArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleImageTags.
     * @param {GalleImageTagDeleteManyArgs} args - Arguments to filter GalleImageTags to delete.
     * @example
     * // Delete a few GalleImageTags
     * const { count } = await prisma.galleImageTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleImageTagDeleteManyArgs>(args?: SelectSubset<T, GalleImageTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleImageTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleImageTags
     * const galleImageTag = await prisma.galleImageTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleImageTagUpdateManyArgs>(args: SelectSubset<T, GalleImageTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GalleImageTag.
     * @param {GalleImageTagUpsertArgs} args - Arguments to update or create a GalleImageTag.
     * @example
     * // Update or create a GalleImageTag
     * const galleImageTag = await prisma.galleImageTag.upsert({
     *   create: {
     *     // ... data to create a GalleImageTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleImageTag we want to update
     *   }
     * })
     */
    upsert<T extends GalleImageTagUpsertArgs>(args: SelectSubset<T, GalleImageTagUpsertArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleImageTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagCountArgs} args - Arguments to filter GalleImageTags to count.
     * @example
     * // Count the number of GalleImageTags
     * const count = await prisma.galleImageTag.count({
     *   where: {
     *     // ... the filter for the GalleImageTags we want to count
     *   }
     * })
    **/
    count<T extends GalleImageTagCountArgs>(
      args?: Subset<T, GalleImageTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleImageTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleImageTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleImageTagAggregateArgs>(args: Subset<T, GalleImageTagAggregateArgs>): Prisma.PrismaPromise<GetGalleImageTagAggregateType<T>>

    /**
     * Group by GalleImageTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleImageTagGroupByArgs} args - Group by arguments.
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
      T extends GalleImageTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleImageTagGroupByArgs['orderBy'] }
        : { orderBy?: GalleImageTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleImageTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleImageTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleImageTag model
   */
  readonly fields: GalleImageTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleImageTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleImageTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends GalleImageTag$imagesArgs<ExtArgs> = {}>(args?: Subset<T, GalleImageTag$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GalleImageTag model
   */
  interface GalleImageTagFieldRefs {
    readonly id: FieldRef<"GalleImageTag", 'Int'>
    readonly name: FieldRef<"GalleImageTag", 'String'>
    readonly show: FieldRef<"GalleImageTag", 'RecordActiveStatus'>
    readonly status: FieldRef<"GalleImageTag", 'RecordDeleteStatus'>
    readonly createdAt: FieldRef<"GalleImageTag", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleImageTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleImageTag findUnique
   */
  export type GalleImageTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * Filter, which GalleImageTag to fetch.
     */
    where: GalleImageTagWhereUniqueInput
  }

  /**
   * GalleImageTag findUniqueOrThrow
   */
  export type GalleImageTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * Filter, which GalleImageTag to fetch.
     */
    where: GalleImageTagWhereUniqueInput
  }

  /**
   * GalleImageTag findFirst
   */
  export type GalleImageTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * Filter, which GalleImageTag to fetch.
     */
    where?: GalleImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleImageTags to fetch.
     */
    orderBy?: GalleImageTagOrderByWithRelationInput | GalleImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleImageTags.
     */
    cursor?: GalleImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleImageTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleImageTags.
     */
    distinct?: GalleImageTagScalarFieldEnum | GalleImageTagScalarFieldEnum[]
  }

  /**
   * GalleImageTag findFirstOrThrow
   */
  export type GalleImageTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * Filter, which GalleImageTag to fetch.
     */
    where?: GalleImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleImageTags to fetch.
     */
    orderBy?: GalleImageTagOrderByWithRelationInput | GalleImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleImageTags.
     */
    cursor?: GalleImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleImageTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleImageTags.
     */
    distinct?: GalleImageTagScalarFieldEnum | GalleImageTagScalarFieldEnum[]
  }

  /**
   * GalleImageTag findMany
   */
  export type GalleImageTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * Filter, which GalleImageTags to fetch.
     */
    where?: GalleImageTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleImageTags to fetch.
     */
    orderBy?: GalleImageTagOrderByWithRelationInput | GalleImageTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleImageTags.
     */
    cursor?: GalleImageTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleImageTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleImageTags.
     */
    skip?: number
    distinct?: GalleImageTagScalarFieldEnum | GalleImageTagScalarFieldEnum[]
  }

  /**
   * GalleImageTag create
   */
  export type GalleImageTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleImageTag.
     */
    data: XOR<GalleImageTagCreateInput, GalleImageTagUncheckedCreateInput>
  }

  /**
   * GalleImageTag createMany
   */
  export type GalleImageTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleImageTags.
     */
    data: GalleImageTagCreateManyInput | GalleImageTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleImageTag update
   */
  export type GalleImageTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleImageTag.
     */
    data: XOR<GalleImageTagUpdateInput, GalleImageTagUncheckedUpdateInput>
    /**
     * Choose, which GalleImageTag to update.
     */
    where: GalleImageTagWhereUniqueInput
  }

  /**
   * GalleImageTag updateMany
   */
  export type GalleImageTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleImageTags.
     */
    data: XOR<GalleImageTagUpdateManyMutationInput, GalleImageTagUncheckedUpdateManyInput>
    /**
     * Filter which GalleImageTags to update
     */
    where?: GalleImageTagWhereInput
    /**
     * Limit how many GalleImageTags to update.
     */
    limit?: number
  }

  /**
   * GalleImageTag upsert
   */
  export type GalleImageTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleImageTag to update in case it exists.
     */
    where: GalleImageTagWhereUniqueInput
    /**
     * In case the GalleImageTag found by the `where` argument doesn't exist, create a new GalleImageTag with this data.
     */
    create: XOR<GalleImageTagCreateInput, GalleImageTagUncheckedCreateInput>
    /**
     * In case the GalleImageTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleImageTagUpdateInput, GalleImageTagUncheckedUpdateInput>
  }

  /**
   * GalleImageTag delete
   */
  export type GalleImageTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
    /**
     * Filter which GalleImageTag to delete.
     */
    where: GalleImageTagWhereUniqueInput
  }

  /**
   * GalleImageTag deleteMany
   */
  export type GalleImageTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleImageTags to delete
     */
    where?: GalleImageTagWhereInput
    /**
     * Limit how many GalleImageTags to delete.
     */
    limit?: number
  }

  /**
   * GalleImageTag.images
   */
  export type GalleImageTag$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    cursor?: GalleryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleImageTag without action
   */
  export type GalleImageTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleImageTag
     */
    select?: GalleImageTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleImageTag
     */
    omit?: GalleImageTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleImageTagInclude<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageAvgAggregateOutputType = {
    id: number | null
    tagId: number | null
  }

  export type GalleryImageSumAggregateOutputType = {
    id: number | null
    tagId: number | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    tagId: number | null
    link: string | null
    show: $Enums.RecordActiveStatus | null
    status: $Enums.RecordDeleteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    tagId: number | null
    link: string | null
    show: $Enums.RecordActiveStatus | null
    status: $Enums.RecordDeleteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    image: number
    name: number
    tagId: number
    link: number
    show: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryImageAvgAggregateInputType = {
    id?: true
    tagId?: true
  }

  export type GalleryImageSumAggregateInputType = {
    id?: true
    tagId?: true
  }

  export type GalleryImageMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    tagId?: true
    link?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    tagId?: true
    link?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    tagId?: true
    link?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _avg?: GalleryImageAvgAggregateInputType
    _sum?: GalleryImageSumAggregateInputType
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: number
    image: string
    name: string
    tagId: number
    link: string | null
    show: $Enums.RecordActiveStatus
    status: $Enums.RecordDeleteStatus
    createdAt: Date
    updatedAt: Date
    _count: GalleryImageCountAggregateOutputType | null
    _avg: GalleryImageAvgAggregateOutputType | null
    _sum: GalleryImageSumAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    tagId?: boolean
    link?: boolean
    show?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tag?: boolean | GalleImageTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryImage"]>



  export type GalleryImageSelectScalar = {
    id?: boolean
    image?: boolean
    name?: boolean
    tagId?: boolean
    link?: boolean
    show?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "name" | "tagId" | "link" | "show" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryImage"]>
  export type GalleryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | GalleImageTagDefaultArgs<ExtArgs>
  }

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {
      tag: Prisma.$GalleImageTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      name: string
      tagId: number
      link: string | null
      show: $Enums.RecordActiveStatus
      status: $Enums.RecordDeleteStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
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
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends GalleImageTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalleImageTagDefaultArgs<ExtArgs>>): Prisma__GalleImageTagClient<$Result.GetResult<Prisma.$GalleImageTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GalleryImage model
   */
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'Int'>
    readonly image: FieldRef<"GalleryImage", 'String'>
    readonly name: FieldRef<"GalleryImage", 'String'>
    readonly tagId: FieldRef<"GalleryImage", 'Int'>
    readonly link: FieldRef<"GalleryImage", 'String'>
    readonly show: FieldRef<"GalleryImage", 'RecordActiveStatus'>
    readonly status: FieldRef<"GalleryImage", 'RecordDeleteStatus'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to delete.
     */
    limit?: number
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryImageInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    metaTitle: string | null
    metaDesc: string | null
    metaKeyword: string | null
    slug: string | null
    ogTitle: string | null
    ogDesc: string | null
    ogImage: string | null
    bannerImage: string | null
    bannerImageAlt: string | null
    bannerTitle: string | null
    blogName: string | null
    blogDesc: string | null
    blogDesc1: string | null
    blogDesc2: string | null
    mainImage: string | null
    mainImageAlt: string | null
    mainImage2: string | null
    mainImageAlt2: string | null
    callToAction: string | null
    show: $Enums.RecordActiveStatus | null
    status: $Enums.RecordDeleteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    metaTitle: string | null
    metaDesc: string | null
    metaKeyword: string | null
    slug: string | null
    ogTitle: string | null
    ogDesc: string | null
    ogImage: string | null
    bannerImage: string | null
    bannerImageAlt: string | null
    bannerTitle: string | null
    blogName: string | null
    blogDesc: string | null
    blogDesc1: string | null
    blogDesc2: string | null
    mainImage: string | null
    mainImageAlt: string | null
    mainImage2: string | null
    mainImageAlt2: string | null
    callToAction: string | null
    show: $Enums.RecordActiveStatus | null
    status: $Enums.RecordDeleteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    metaTitle: number
    metaDesc: number
    metaKeyword: number
    slug: number
    ogTitle: number
    ogDesc: number
    ogImage: number
    bannerImage: number
    bannerImageAlt: number
    bannerTitle: number
    blogName: number
    blogDesc: number
    blogDesc1: number
    blogDesc2: number
    mainImage: number
    mainImageAlt: number
    mainImage2: number
    mainImageAlt2: number
    callToAction: number
    show: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDesc?: true
    metaKeyword?: true
    slug?: true
    ogTitle?: true
    ogDesc?: true
    ogImage?: true
    bannerImage?: true
    bannerImageAlt?: true
    bannerTitle?: true
    blogName?: true
    blogDesc?: true
    blogDesc1?: true
    blogDesc2?: true
    mainImage?: true
    mainImageAlt?: true
    mainImage2?: true
    mainImageAlt2?: true
    callToAction?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDesc?: true
    metaKeyword?: true
    slug?: true
    ogTitle?: true
    ogDesc?: true
    ogImage?: true
    bannerImage?: true
    bannerImageAlt?: true
    bannerTitle?: true
    blogName?: true
    blogDesc?: true
    blogDesc1?: true
    blogDesc2?: true
    mainImage?: true
    mainImageAlt?: true
    mainImage2?: true
    mainImageAlt2?: true
    callToAction?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDesc?: true
    metaKeyword?: true
    slug?: true
    ogTitle?: true
    ogDesc?: true
    ogImage?: true
    bannerImage?: true
    bannerImageAlt?: true
    bannerTitle?: true
    blogName?: true
    blogDesc?: true
    blogDesc1?: true
    blogDesc2?: true
    mainImage?: true
    mainImageAlt?: true
    mainImage2?: true
    mainImageAlt2?: true
    callToAction?: true
    show?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    metaTitle: string | null
    metaDesc: string | null
    metaKeyword: string | null
    slug: string
    ogTitle: string | null
    ogDesc: string | null
    ogImage: string | null
    bannerImage: string | null
    bannerImageAlt: string | null
    bannerTitle: string | null
    blogName: string
    blogDesc: string
    blogDesc1: string | null
    blogDesc2: string | null
    mainImage: string | null
    mainImageAlt: string | null
    mainImage2: string | null
    mainImageAlt2: string | null
    callToAction: string | null
    show: $Enums.RecordActiveStatus
    status: $Enums.RecordDeleteStatus
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDesc?: boolean
    metaKeyword?: boolean
    slug?: boolean
    ogTitle?: boolean
    ogDesc?: boolean
    ogImage?: boolean
    bannerImage?: boolean
    bannerImageAlt?: boolean
    bannerTitle?: boolean
    blogName?: boolean
    blogDesc?: boolean
    blogDesc1?: boolean
    blogDesc2?: boolean
    mainImage?: boolean
    mainImageAlt?: boolean
    mainImage2?: boolean
    mainImageAlt2?: boolean
    callToAction?: boolean
    show?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>



  export type BlogSelectScalar = {
    id?: boolean
    metaTitle?: boolean
    metaDesc?: boolean
    metaKeyword?: boolean
    slug?: boolean
    ogTitle?: boolean
    ogDesc?: boolean
    ogImage?: boolean
    bannerImage?: boolean
    bannerImageAlt?: boolean
    bannerTitle?: boolean
    blogName?: boolean
    blogDesc?: boolean
    blogDesc1?: boolean
    blogDesc2?: boolean
    mainImage?: boolean
    mainImageAlt?: boolean
    mainImage2?: boolean
    mainImageAlt2?: boolean
    callToAction?: boolean
    show?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaTitle" | "metaDesc" | "metaKeyword" | "slug" | "ogTitle" | "ogDesc" | "ogImage" | "bannerImage" | "bannerImageAlt" | "bannerTitle" | "blogName" | "blogDesc" | "blogDesc1" | "blogDesc2" | "mainImage" | "mainImageAlt" | "mainImage2" | "mainImageAlt2" | "callToAction" | "show" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      metaTitle: string | null
      metaDesc: string | null
      metaKeyword: string | null
      slug: string
      ogTitle: string | null
      ogDesc: string | null
      ogImage: string | null
      bannerImage: string | null
      bannerImageAlt: string | null
      bannerTitle: string | null
      blogName: string
      blogDesc: string
      blogDesc1: string | null
      blogDesc2: string | null
      mainImage: string | null
      mainImageAlt: string | null
      mainImage2: string | null
      mainImageAlt2: string | null
      callToAction: string | null
      show: $Enums.RecordActiveStatus
      status: $Enums.RecordDeleteStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly metaTitle: FieldRef<"Blog", 'String'>
    readonly metaDesc: FieldRef<"Blog", 'String'>
    readonly metaKeyword: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly ogTitle: FieldRef<"Blog", 'String'>
    readonly ogDesc: FieldRef<"Blog", 'String'>
    readonly ogImage: FieldRef<"Blog", 'String'>
    readonly bannerImage: FieldRef<"Blog", 'String'>
    readonly bannerImageAlt: FieldRef<"Blog", 'String'>
    readonly bannerTitle: FieldRef<"Blog", 'String'>
    readonly blogName: FieldRef<"Blog", 'String'>
    readonly blogDesc: FieldRef<"Blog", 'String'>
    readonly blogDesc1: FieldRef<"Blog", 'String'>
    readonly blogDesc2: FieldRef<"Blog", 'String'>
    readonly mainImage: FieldRef<"Blog", 'String'>
    readonly mainImageAlt: FieldRef<"Blog", 'String'>
    readonly mainImage2: FieldRef<"Blog", 'String'>
    readonly mainImageAlt2: FieldRef<"Blog", 'String'>
    readonly callToAction: FieldRef<"Blog", 'String'>
    readonly show: FieldRef<"Blog", 'RecordActiveStatus'>
    readonly status: FieldRef<"Blog", 'RecordDeleteStatus'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GalleImageTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    show: 'show',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleImageTagScalarFieldEnum = (typeof GalleImageTagScalarFieldEnum)[keyof typeof GalleImageTagScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    tagId: 'tagId',
    link: 'link',
    show: 'show',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    metaTitle: 'metaTitle',
    metaDesc: 'metaDesc',
    metaKeyword: 'metaKeyword',
    slug: 'slug',
    ogTitle: 'ogTitle',
    ogDesc: 'ogDesc',
    ogImage: 'ogImage',
    bannerImage: 'bannerImage',
    bannerImageAlt: 'bannerImageAlt',
    bannerTitle: 'bannerTitle',
    blogName: 'blogName',
    blogDesc: 'blogDesc',
    blogDesc1: 'blogDesc1',
    blogDesc2: 'blogDesc2',
    mainImage: 'mainImage',
    mainImageAlt: 'mainImageAlt',
    mainImage2: 'mainImage2',
    mainImageAlt2: 'mainImageAlt2',
    callToAction: 'callToAction',
    show: 'show',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const GalleImageTagOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type GalleImageTagOrderByRelevanceFieldEnum = (typeof GalleImageTagOrderByRelevanceFieldEnum)[keyof typeof GalleImageTagOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const GalleryImageOrderByRelevanceFieldEnum: {
    image: 'image',
    name: 'name',
    link: 'link'
  };

  export type GalleryImageOrderByRelevanceFieldEnum = (typeof GalleryImageOrderByRelevanceFieldEnum)[keyof typeof GalleryImageOrderByRelevanceFieldEnum]


  export const BlogOrderByRelevanceFieldEnum: {
    metaTitle: 'metaTitle',
    metaDesc: 'metaDesc',
    metaKeyword: 'metaKeyword',
    slug: 'slug',
    ogTitle: 'ogTitle',
    ogDesc: 'ogDesc',
    ogImage: 'ogImage',
    bannerImage: 'bannerImage',
    bannerImageAlt: 'bannerImageAlt',
    bannerTitle: 'bannerTitle',
    blogName: 'blogName',
    blogDesc: 'blogDesc',
    blogDesc1: 'blogDesc1',
    blogDesc2: 'blogDesc2',
    mainImage: 'mainImage',
    mainImageAlt: 'mainImageAlt',
    mainImage2: 'mainImage2',
    mainImageAlt2: 'mainImageAlt2',
    callToAction: 'callToAction'
  };

  export type BlogOrderByRelevanceFieldEnum = (typeof BlogOrderByRelevanceFieldEnum)[keyof typeof BlogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'RecordActiveStatus'
   */
  export type EnumRecordActiveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordActiveStatus'>
    


  /**
   * Reference to a field of type 'RecordDeleteStatus'
   */
  export type EnumRecordDeleteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordDeleteStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GalleImageTagWhereInput = {
    AND?: GalleImageTagWhereInput | GalleImageTagWhereInput[]
    OR?: GalleImageTagWhereInput[]
    NOT?: GalleImageTagWhereInput | GalleImageTagWhereInput[]
    id?: IntFilter<"GalleImageTag"> | number
    name?: StringFilter<"GalleImageTag"> | string
    show?: EnumRecordActiveStatusFilter<"GalleImageTag"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"GalleImageTag"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"GalleImageTag"> | Date | string
    updatedAt?: DateTimeFilter<"GalleImageTag"> | Date | string
    images?: GalleryImageListRelationFilter
  }

  export type GalleImageTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: GalleryImageOrderByRelationAggregateInput
    _relevance?: GalleImageTagOrderByRelevanceInput
  }

  export type GalleImageTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GalleImageTagWhereInput | GalleImageTagWhereInput[]
    OR?: GalleImageTagWhereInput[]
    NOT?: GalleImageTagWhereInput | GalleImageTagWhereInput[]
    show?: EnumRecordActiveStatusFilter<"GalleImageTag"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"GalleImageTag"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"GalleImageTag"> | Date | string
    updatedAt?: DateTimeFilter<"GalleImageTag"> | Date | string
    images?: GalleryImageListRelationFilter
  }, "id" | "name">

  export type GalleImageTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleImageTagCountOrderByAggregateInput
    _avg?: GalleImageTagAvgOrderByAggregateInput
    _max?: GalleImageTagMaxOrderByAggregateInput
    _min?: GalleImageTagMinOrderByAggregateInput
    _sum?: GalleImageTagSumOrderByAggregateInput
  }

  export type GalleImageTagScalarWhereWithAggregatesInput = {
    AND?: GalleImageTagScalarWhereWithAggregatesInput | GalleImageTagScalarWhereWithAggregatesInput[]
    OR?: GalleImageTagScalarWhereWithAggregatesInput[]
    NOT?: GalleImageTagScalarWhereWithAggregatesInput | GalleImageTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleImageTag"> | number
    name?: StringWithAggregatesFilter<"GalleImageTag"> | string
    show?: EnumRecordActiveStatusWithAggregatesFilter<"GalleImageTag"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusWithAggregatesFilter<"GalleImageTag"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeWithAggregatesFilter<"GalleImageTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleImageTag"> | Date | string
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: IntFilter<"GalleryImage"> | number
    image?: StringFilter<"GalleryImage"> | string
    name?: StringFilter<"GalleryImage"> | string
    tagId?: IntFilter<"GalleryImage"> | number
    link?: StringNullableFilter<"GalleryImage"> | string | null
    show?: EnumRecordActiveStatusFilter<"GalleryImage"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"GalleryImage"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
    tag?: XOR<GalleImageTagScalarRelationFilter, GalleImageTagWhereInput>
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    tagId?: SortOrder
    link?: SortOrderInput | SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tag?: GalleImageTagOrderByWithRelationInput
    _relevance?: GalleryImageOrderByRelevanceInput
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    image?: StringFilter<"GalleryImage"> | string
    name?: StringFilter<"GalleryImage"> | string
    tagId?: IntFilter<"GalleryImage"> | number
    link?: StringNullableFilter<"GalleryImage"> | string | null
    show?: EnumRecordActiveStatusFilter<"GalleryImage"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"GalleryImage"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
    tag?: XOR<GalleImageTagScalarRelationFilter, GalleImageTagWhereInput>
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    tagId?: SortOrder
    link?: SortOrderInput | SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _avg?: GalleryImageAvgOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
    _sum?: GalleryImageSumOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleryImage"> | number
    image?: StringWithAggregatesFilter<"GalleryImage"> | string
    name?: StringWithAggregatesFilter<"GalleryImage"> | string
    tagId?: IntWithAggregatesFilter<"GalleryImage"> | number
    link?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    show?: EnumRecordActiveStatusWithAggregatesFilter<"GalleryImage"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusWithAggregatesFilter<"GalleryImage"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDesc?: StringNullableFilter<"Blog"> | string | null
    metaKeyword?: StringNullableFilter<"Blog"> | string | null
    slug?: StringFilter<"Blog"> | string
    ogTitle?: StringNullableFilter<"Blog"> | string | null
    ogDesc?: StringNullableFilter<"Blog"> | string | null
    ogImage?: StringNullableFilter<"Blog"> | string | null
    bannerImage?: StringNullableFilter<"Blog"> | string | null
    bannerImageAlt?: StringNullableFilter<"Blog"> | string | null
    bannerTitle?: StringNullableFilter<"Blog"> | string | null
    blogName?: StringFilter<"Blog"> | string
    blogDesc?: StringFilter<"Blog"> | string
    blogDesc1?: StringNullableFilter<"Blog"> | string | null
    blogDesc2?: StringNullableFilter<"Blog"> | string | null
    mainImage?: StringNullableFilter<"Blog"> | string | null
    mainImageAlt?: StringNullableFilter<"Blog"> | string | null
    mainImage2?: StringNullableFilter<"Blog"> | string | null
    mainImageAlt2?: StringNullableFilter<"Blog"> | string | null
    callToAction?: StringNullableFilter<"Blog"> | string | null
    show?: EnumRecordActiveStatusFilter<"Blog"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"Blog"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDesc?: SortOrderInput | SortOrder
    metaKeyword?: SortOrderInput | SortOrder
    slug?: SortOrder
    ogTitle?: SortOrderInput | SortOrder
    ogDesc?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    bannerImageAlt?: SortOrderInput | SortOrder
    bannerTitle?: SortOrderInput | SortOrder
    blogName?: SortOrder
    blogDesc?: SortOrder
    blogDesc1?: SortOrderInput | SortOrder
    blogDesc2?: SortOrderInput | SortOrder
    mainImage?: SortOrderInput | SortOrder
    mainImageAlt?: SortOrderInput | SortOrder
    mainImage2?: SortOrderInput | SortOrder
    mainImageAlt2?: SortOrderInput | SortOrder
    callToAction?: SortOrderInput | SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: BlogOrderByRelevanceInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDesc?: StringNullableFilter<"Blog"> | string | null
    metaKeyword?: StringNullableFilter<"Blog"> | string | null
    ogTitle?: StringNullableFilter<"Blog"> | string | null
    ogDesc?: StringNullableFilter<"Blog"> | string | null
    ogImage?: StringNullableFilter<"Blog"> | string | null
    bannerImage?: StringNullableFilter<"Blog"> | string | null
    bannerImageAlt?: StringNullableFilter<"Blog"> | string | null
    bannerTitle?: StringNullableFilter<"Blog"> | string | null
    blogName?: StringFilter<"Blog"> | string
    blogDesc?: StringFilter<"Blog"> | string
    blogDesc1?: StringNullableFilter<"Blog"> | string | null
    blogDesc2?: StringNullableFilter<"Blog"> | string | null
    mainImage?: StringNullableFilter<"Blog"> | string | null
    mainImageAlt?: StringNullableFilter<"Blog"> | string | null
    mainImage2?: StringNullableFilter<"Blog"> | string | null
    mainImageAlt2?: StringNullableFilter<"Blog"> | string | null
    callToAction?: StringNullableFilter<"Blog"> | string | null
    show?: EnumRecordActiveStatusFilter<"Blog"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"Blog"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDesc?: SortOrderInput | SortOrder
    metaKeyword?: SortOrderInput | SortOrder
    slug?: SortOrder
    ogTitle?: SortOrderInput | SortOrder
    ogDesc?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    bannerImage?: SortOrderInput | SortOrder
    bannerImageAlt?: SortOrderInput | SortOrder
    bannerTitle?: SortOrderInput | SortOrder
    blogName?: SortOrder
    blogDesc?: SortOrder
    blogDesc1?: SortOrderInput | SortOrder
    blogDesc2?: SortOrderInput | SortOrder
    mainImage?: SortOrderInput | SortOrder
    mainImageAlt?: SortOrderInput | SortOrder
    mainImage2?: SortOrderInput | SortOrder
    mainImageAlt2?: SortOrderInput | SortOrder
    callToAction?: SortOrderInput | SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    metaTitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaDesc?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaKeyword?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    slug?: StringWithAggregatesFilter<"Blog"> | string
    ogTitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    ogDesc?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    bannerImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    bannerImageAlt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    bannerTitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    blogName?: StringWithAggregatesFilter<"Blog"> | string
    blogDesc?: StringWithAggregatesFilter<"Blog"> | string
    blogDesc1?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    blogDesc2?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    mainImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    mainImageAlt?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    mainImage2?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    mainImageAlt2?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    callToAction?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    show?: EnumRecordActiveStatusWithAggregatesFilter<"Blog"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusWithAggregatesFilter<"Blog"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleImageTagCreateInput = {
    name: string
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: GalleryImageCreateNestedManyWithoutTagInput
  }

  export type GalleImageTagUncheckedCreateInput = {
    id?: number
    name: string
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: GalleryImageUncheckedCreateNestedManyWithoutTagInput
  }

  export type GalleImageTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GalleryImageUpdateManyWithoutTagNestedInput
  }

  export type GalleImageTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: GalleryImageUncheckedUpdateManyWithoutTagNestedInput
  }

  export type GalleImageTagCreateManyInput = {
    id?: number
    name: string
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleImageTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleImageTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateInput = {
    image: string
    name: string
    link?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tag: GalleImageTagCreateNestedOneWithoutImagesInput
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: number
    image: string
    name: string
    tagId: number
    link?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: GalleImageTagUpdateOneRequiredWithoutImagesNestedInput
  }

  export type GalleryImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagId?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyInput = {
    id?: number
    image: string
    name: string
    tagId: number
    link?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagId?: IntFieldUpdateOperationsInput | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    metaTitle?: string | null
    metaDesc?: string | null
    metaKeyword?: string | null
    slug: string
    ogTitle?: string | null
    ogDesc?: string | null
    ogImage?: string | null
    bannerImage?: string | null
    bannerImageAlt?: string | null
    bannerTitle?: string | null
    blogName: string
    blogDesc: string
    blogDesc1?: string | null
    blogDesc2?: string | null
    mainImage?: string | null
    mainImageAlt?: string | null
    mainImage2?: string | null
    mainImageAlt2?: string | null
    callToAction?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    metaTitle?: string | null
    metaDesc?: string | null
    metaKeyword?: string | null
    slug: string
    ogTitle?: string | null
    ogDesc?: string | null
    ogImage?: string | null
    bannerImage?: string | null
    bannerImageAlt?: string | null
    bannerTitle?: string | null
    blogName: string
    blogDesc: string
    blogDesc1?: string | null
    blogDesc2?: string | null
    mainImage?: string | null
    mainImageAlt?: string | null
    mainImage2?: string | null
    mainImageAlt2?: string | null
    callToAction?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    bannerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    blogName?: StringFieldUpdateOperationsInput | string
    blogDesc?: StringFieldUpdateOperationsInput | string
    blogDesc1?: NullableStringFieldUpdateOperationsInput | string | null
    blogDesc2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt2?: NullableStringFieldUpdateOperationsInput | string | null
    callToAction?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    bannerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    blogName?: StringFieldUpdateOperationsInput | string
    blogDesc?: StringFieldUpdateOperationsInput | string
    blogDesc1?: NullableStringFieldUpdateOperationsInput | string | null
    blogDesc2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt2?: NullableStringFieldUpdateOperationsInput | string | null
    callToAction?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: number
    metaTitle?: string | null
    metaDesc?: string | null
    metaKeyword?: string | null
    slug: string
    ogTitle?: string | null
    ogDesc?: string | null
    ogImage?: string | null
    bannerImage?: string | null
    bannerImageAlt?: string | null
    bannerTitle?: string | null
    blogName: string
    blogDesc: string
    blogDesc1?: string | null
    blogDesc2?: string | null
    mainImage?: string | null
    mainImageAlt?: string | null
    mainImage2?: string | null
    mainImageAlt2?: string | null
    callToAction?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    bannerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    blogName?: StringFieldUpdateOperationsInput | string
    blogDesc?: StringFieldUpdateOperationsInput | string
    blogDesc1?: NullableStringFieldUpdateOperationsInput | string | null
    blogDesc2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt2?: NullableStringFieldUpdateOperationsInput | string | null
    callToAction?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeyword?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    bannerTitle?: NullableStringFieldUpdateOperationsInput | string | null
    blogName?: StringFieldUpdateOperationsInput | string
    blogDesc?: StringFieldUpdateOperationsInput | string
    blogDesc1?: NullableStringFieldUpdateOperationsInput | string | null
    blogDesc2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    mainImage2?: NullableStringFieldUpdateOperationsInput | string | null
    mainImageAlt2?: NullableStringFieldUpdateOperationsInput | string | null
    callToAction?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRecordActiveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordActiveStatus | EnumRecordActiveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordActiveStatus[]
    notIn?: $Enums.RecordActiveStatus[]
    not?: NestedEnumRecordActiveStatusFilter<$PrismaModel> | $Enums.RecordActiveStatus
  }

  export type EnumRecordDeleteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordDeleteStatus | EnumRecordDeleteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordDeleteStatus[]
    notIn?: $Enums.RecordDeleteStatus[]
    not?: NestedEnumRecordDeleteStatusFilter<$PrismaModel> | $Enums.RecordDeleteStatus
  }

  export type GalleryImageListRelationFilter = {
    every?: GalleryImageWhereInput
    some?: GalleryImageWhereInput
    none?: GalleryImageWhereInput
  }

  export type GalleryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalleImageTagOrderByRelevanceInput = {
    fields: GalleImageTagOrderByRelevanceFieldEnum | GalleImageTagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GalleImageTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleImageTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GalleImageTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleImageTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleImageTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRecordActiveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordActiveStatus | EnumRecordActiveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordActiveStatus[]
    notIn?: $Enums.RecordActiveStatus[]
    not?: NestedEnumRecordActiveStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordActiveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordActiveStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordActiveStatusFilter<$PrismaModel>
  }

  export type EnumRecordDeleteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordDeleteStatus | EnumRecordDeleteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordDeleteStatus[]
    notIn?: $Enums.RecordDeleteStatus[]
    not?: NestedEnumRecordDeleteStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordDeleteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordDeleteStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordDeleteStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GalleImageTagScalarRelationFilter = {
    is?: GalleImageTagWhereInput
    isNot?: GalleImageTagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GalleryImageOrderByRelevanceInput = {
    fields: GalleryImageOrderByRelevanceFieldEnum | GalleryImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    tagId?: SortOrder
    link?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    tagId?: SortOrder
    link?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    tagId?: SortOrder
    link?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryImageSumOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BlogOrderByRelevanceInput = {
    fields: BlogOrderByRelevanceFieldEnum | BlogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDesc?: SortOrder
    metaKeyword?: SortOrder
    slug?: SortOrder
    ogTitle?: SortOrder
    ogDesc?: SortOrder
    ogImage?: SortOrder
    bannerImage?: SortOrder
    bannerImageAlt?: SortOrder
    bannerTitle?: SortOrder
    blogName?: SortOrder
    blogDesc?: SortOrder
    blogDesc1?: SortOrder
    blogDesc2?: SortOrder
    mainImage?: SortOrder
    mainImageAlt?: SortOrder
    mainImage2?: SortOrder
    mainImageAlt2?: SortOrder
    callToAction?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDesc?: SortOrder
    metaKeyword?: SortOrder
    slug?: SortOrder
    ogTitle?: SortOrder
    ogDesc?: SortOrder
    ogImage?: SortOrder
    bannerImage?: SortOrder
    bannerImageAlt?: SortOrder
    bannerTitle?: SortOrder
    blogName?: SortOrder
    blogDesc?: SortOrder
    blogDesc1?: SortOrder
    blogDesc2?: SortOrder
    mainImage?: SortOrder
    mainImageAlt?: SortOrder
    mainImage2?: SortOrder
    mainImageAlt2?: SortOrder
    callToAction?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDesc?: SortOrder
    metaKeyword?: SortOrder
    slug?: SortOrder
    ogTitle?: SortOrder
    ogDesc?: SortOrder
    ogImage?: SortOrder
    bannerImage?: SortOrder
    bannerImageAlt?: SortOrder
    bannerTitle?: SortOrder
    blogName?: SortOrder
    blogDesc?: SortOrder
    blogDesc1?: SortOrder
    blogDesc2?: SortOrder
    mainImage?: SortOrder
    mainImageAlt?: SortOrder
    mainImage2?: SortOrder
    mainImageAlt2?: SortOrder
    callToAction?: SortOrder
    show?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GalleryImageCreateNestedManyWithoutTagInput = {
    create?: XOR<GalleryImageCreateWithoutTagInput, GalleryImageUncheckedCreateWithoutTagInput> | GalleryImageCreateWithoutTagInput[] | GalleryImageUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutTagInput | GalleryImageCreateOrConnectWithoutTagInput[]
    createMany?: GalleryImageCreateManyTagInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type GalleryImageUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<GalleryImageCreateWithoutTagInput, GalleryImageUncheckedCreateWithoutTagInput> | GalleryImageCreateWithoutTagInput[] | GalleryImageUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutTagInput | GalleryImageCreateOrConnectWithoutTagInput[]
    createMany?: GalleryImageCreateManyTagInputEnvelope
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
  }

  export type EnumRecordActiveStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordActiveStatus
  }

  export type EnumRecordDeleteStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordDeleteStatus
  }

  export type GalleryImageUpdateManyWithoutTagNestedInput = {
    create?: XOR<GalleryImageCreateWithoutTagInput, GalleryImageUncheckedCreateWithoutTagInput> | GalleryImageCreateWithoutTagInput[] | GalleryImageUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutTagInput | GalleryImageCreateOrConnectWithoutTagInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutTagInput | GalleryImageUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: GalleryImageCreateManyTagInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutTagInput | GalleryImageUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutTagInput | GalleryImageUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type GalleryImageUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<GalleryImageCreateWithoutTagInput, GalleryImageUncheckedCreateWithoutTagInput> | GalleryImageCreateWithoutTagInput[] | GalleryImageUncheckedCreateWithoutTagInput[]
    connectOrCreate?: GalleryImageCreateOrConnectWithoutTagInput | GalleryImageCreateOrConnectWithoutTagInput[]
    upsert?: GalleryImageUpsertWithWhereUniqueWithoutTagInput | GalleryImageUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: GalleryImageCreateManyTagInputEnvelope
    set?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    disconnect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    delete?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    connect?: GalleryImageWhereUniqueInput | GalleryImageWhereUniqueInput[]
    update?: GalleryImageUpdateWithWhereUniqueWithoutTagInput | GalleryImageUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: GalleryImageUpdateManyWithWhereWithoutTagInput | GalleryImageUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
  }

  export type GalleImageTagCreateNestedOneWithoutImagesInput = {
    create?: XOR<GalleImageTagCreateWithoutImagesInput, GalleImageTagUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GalleImageTagCreateOrConnectWithoutImagesInput
    connect?: GalleImageTagWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GalleImageTagUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<GalleImageTagCreateWithoutImagesInput, GalleImageTagUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GalleImageTagCreateOrConnectWithoutImagesInput
    upsert?: GalleImageTagUpsertWithoutImagesInput
    connect?: GalleImageTagWhereUniqueInput
    update?: XOR<XOR<GalleImageTagUpdateToOneWithWhereWithoutImagesInput, GalleImageTagUpdateWithoutImagesInput>, GalleImageTagUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRecordActiveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordActiveStatus | EnumRecordActiveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordActiveStatus[]
    notIn?: $Enums.RecordActiveStatus[]
    not?: NestedEnumRecordActiveStatusFilter<$PrismaModel> | $Enums.RecordActiveStatus
  }

  export type NestedEnumRecordDeleteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordDeleteStatus | EnumRecordDeleteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordDeleteStatus[]
    notIn?: $Enums.RecordDeleteStatus[]
    not?: NestedEnumRecordDeleteStatusFilter<$PrismaModel> | $Enums.RecordDeleteStatus
  }

  export type NestedEnumRecordActiveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordActiveStatus | EnumRecordActiveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordActiveStatus[]
    notIn?: $Enums.RecordActiveStatus[]
    not?: NestedEnumRecordActiveStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordActiveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordActiveStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordActiveStatusFilter<$PrismaModel>
  }

  export type NestedEnumRecordDeleteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordDeleteStatus | EnumRecordDeleteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordDeleteStatus[]
    notIn?: $Enums.RecordDeleteStatus[]
    not?: NestedEnumRecordDeleteStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordDeleteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordDeleteStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordDeleteStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GalleryImageCreateWithoutTagInput = {
    image: string
    name: string
    link?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUncheckedCreateWithoutTagInput = {
    id?: number
    image: string
    name: string
    link?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageCreateOrConnectWithoutTagInput = {
    where: GalleryImageWhereUniqueInput
    create: XOR<GalleryImageCreateWithoutTagInput, GalleryImageUncheckedCreateWithoutTagInput>
  }

  export type GalleryImageCreateManyTagInputEnvelope = {
    data: GalleryImageCreateManyTagInput | GalleryImageCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type GalleryImageUpsertWithWhereUniqueWithoutTagInput = {
    where: GalleryImageWhereUniqueInput
    update: XOR<GalleryImageUpdateWithoutTagInput, GalleryImageUncheckedUpdateWithoutTagInput>
    create: XOR<GalleryImageCreateWithoutTagInput, GalleryImageUncheckedCreateWithoutTagInput>
  }

  export type GalleryImageUpdateWithWhereUniqueWithoutTagInput = {
    where: GalleryImageWhereUniqueInput
    data: XOR<GalleryImageUpdateWithoutTagInput, GalleryImageUncheckedUpdateWithoutTagInput>
  }

  export type GalleryImageUpdateManyWithWhereWithoutTagInput = {
    where: GalleryImageScalarWhereInput
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyWithoutTagInput>
  }

  export type GalleryImageScalarWhereInput = {
    AND?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    OR?: GalleryImageScalarWhereInput[]
    NOT?: GalleryImageScalarWhereInput | GalleryImageScalarWhereInput[]
    id?: IntFilter<"GalleryImage"> | number
    image?: StringFilter<"GalleryImage"> | string
    name?: StringFilter<"GalleryImage"> | string
    tagId?: IntFilter<"GalleryImage"> | number
    link?: StringNullableFilter<"GalleryImage"> | string | null
    show?: EnumRecordActiveStatusFilter<"GalleryImage"> | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFilter<"GalleryImage"> | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }

  export type GalleImageTagCreateWithoutImagesInput = {
    name: string
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleImageTagUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleImageTagCreateOrConnectWithoutImagesInput = {
    where: GalleImageTagWhereUniqueInput
    create: XOR<GalleImageTagCreateWithoutImagesInput, GalleImageTagUncheckedCreateWithoutImagesInput>
  }

  export type GalleImageTagUpsertWithoutImagesInput = {
    update: XOR<GalleImageTagUpdateWithoutImagesInput, GalleImageTagUncheckedUpdateWithoutImagesInput>
    create: XOR<GalleImageTagCreateWithoutImagesInput, GalleImageTagUncheckedCreateWithoutImagesInput>
    where?: GalleImageTagWhereInput
  }

  export type GalleImageTagUpdateToOneWithWhereWithoutImagesInput = {
    where?: GalleImageTagWhereInput
    data: XOR<GalleImageTagUpdateWithoutImagesInput, GalleImageTagUncheckedUpdateWithoutImagesInput>
  }

  export type GalleImageTagUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleImageTagUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyTagInput = {
    id?: number
    image: string
    name: string
    link?: string | null
    show?: $Enums.RecordActiveStatus
    status?: $Enums.RecordDeleteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUpdateWithoutTagInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    show?: EnumRecordActiveStatusFieldUpdateOperationsInput | $Enums.RecordActiveStatus
    status?: EnumRecordDeleteStatusFieldUpdateOperationsInput | $Enums.RecordDeleteStatus
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