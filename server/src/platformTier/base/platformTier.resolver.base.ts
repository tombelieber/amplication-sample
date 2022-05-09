/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatePlatformTierArgs } from "./CreatePlatformTierArgs";
import { UpdatePlatformTierArgs } from "./UpdatePlatformTierArgs";
import { DeletePlatformTierArgs } from "./DeletePlatformTierArgs";
import { PlatformTierFindManyArgs } from "./PlatformTierFindManyArgs";
import { PlatformTierFindUniqueArgs } from "./PlatformTierFindUniqueArgs";
import { PlatformTier } from "./PlatformTier";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { PlatformProvider } from "../../platformProvider/base/PlatformProvider";
import { PlatformTierService } from "../platformTier.service";

@graphql.Resolver(() => PlatformTier)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlatformTierResolverBase {
  constructor(
    protected readonly service: PlatformTierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _platformTiersMeta(
    @graphql.Args() args: PlatformTierFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @Public()
  @graphql.Query(() => [PlatformTier])
  async platformTiers(
    @graphql.Args() args: PlatformTierFindManyArgs
  ): Promise<PlatformTier[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => PlatformTier, { nullable: true })
  async platformTier(
    @graphql.Args() args: PlatformTierFindUniqueArgs
  ): Promise<PlatformTier | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlatformTier)
  @nestAccessControl.UseRoles({
    resource: "PlatformTier",
    action: "create",
    possession: "any",
  })
  async createPlatformTier(
    @graphql.Args() args: CreatePlatformTierArgs
  ): Promise<PlatformTier> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        provider: {
          connect: args.data.provider,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PlatformTier)
  @nestAccessControl.UseRoles({
    resource: "PlatformTier",
    action: "update",
    possession: "any",
  })
  async updatePlatformTier(
    @graphql.Args() args: UpdatePlatformTierArgs
  ): Promise<PlatformTier | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          provider: {
            connect: args.data.provider,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PlatformTier)
  @nestAccessControl.UseRoles({
    resource: "PlatformTier",
    action: "delete",
    possession: "any",
  })
  async deletePlatformTier(
    @graphql.Args() args: DeletePlatformTierArgs
  ): Promise<PlatformTier | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Room])
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  async rooms(
    @graphql.Parent() parent: PlatformTier,
    @graphql.Args() args: RoomFindManyArgs
  ): Promise<Room[]> {
    const results = await this.service.findRooms(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => PlatformProvider, { nullable: true })
  async provider(
    @graphql.Parent() parent: PlatformTier
  ): Promise<PlatformProvider | null> {
    const result = await this.service.getProvider(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}