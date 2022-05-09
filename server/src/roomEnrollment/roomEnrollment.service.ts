import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RoomEnrollmentServiceBase } from "./base/roomEnrollment.service.base";

@Injectable()
export class RoomEnrollmentService extends RoomEnrollmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
