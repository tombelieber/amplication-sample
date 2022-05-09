import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PlatformTierServiceBase } from "./base/platformTier.service.base";

@Injectable()
export class PlatformTierService extends PlatformTierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
