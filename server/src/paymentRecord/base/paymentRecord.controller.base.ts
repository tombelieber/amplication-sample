/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PaymentRecordService } from "../paymentRecord.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentRecordCreateInput } from "./PaymentRecordCreateInput";
import { PaymentRecordWhereInput } from "./PaymentRecordWhereInput";
import { PaymentRecordWhereUniqueInput } from "./PaymentRecordWhereUniqueInput";
import { PaymentRecordFindManyArgs } from "./PaymentRecordFindManyArgs";
import { PaymentRecordUpdateInput } from "./PaymentRecordUpdateInput";
import { PaymentRecord } from "./PaymentRecord";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentRecordControllerBase {
  constructor(
    protected readonly service: PaymentRecordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PaymentRecord",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentRecord })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PaymentRecordCreateInput
  ): Promise<PaymentRecord> {
    return await this.service.create({
      data: {
        ...data,

        paymentGateway: {
          connect: data.paymentGateway,
        },

        roomEnrollment: {
          connect: data.roomEnrollment,
        },
      },
      select: {
        amount: true,
        createdAt: true,
        frequency: true,
        id: true,

        paymentGateway: {
          select: {
            id: true,
          },
        },

        roomEnrollment: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PaymentRecord",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentRecord] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PaymentRecordFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<PaymentRecord[]> {
    const args = plainToClass(PaymentRecordFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        frequency: true,
        id: true,

        paymentGateway: {
          select: {
            id: true,
          },
        },

        roomEnrollment: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PaymentRecord",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PaymentRecordWhereUniqueInput
  ): Promise<PaymentRecord | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        frequency: true,
        id: true,

        paymentGateway: {
          select: {
            id: true,
          },
        },

        roomEnrollment: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "PaymentRecord",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PaymentRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PaymentRecordWhereUniqueInput,
    @common.Body() data: PaymentRecordUpdateInput
  ): Promise<PaymentRecord | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          paymentGateway: {
            connect: data.paymentGateway,
          },

          roomEnrollment: {
            connect: data.roomEnrollment,
          },
        },
        select: {
          amount: true,
          createdAt: true,
          frequency: true,
          id: true,

          paymentGateway: {
            select: {
              id: true,
            },
          },

          roomEnrollment: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "PaymentRecord",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PaymentRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PaymentRecordWhereUniqueInput
  ): Promise<PaymentRecord | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          frequency: true,
          id: true,

          paymentGateway: {
            select: {
              id: true,
            },
          },

          roomEnrollment: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
