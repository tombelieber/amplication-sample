import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PlatformProviderServiceBase } from "./base/platformProvider.service.base";

@Injectable()
export class PlatformProviderService extends PlatformProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
