import { Module } from "@nestjs/common";
import { RoomEnrollmentModuleBase } from "./base/roomEnrollment.module.base";
import { RoomEnrollmentService } from "./roomEnrollment.service";
import { RoomEnrollmentController } from "./roomEnrollment.controller";
import { RoomEnrollmentResolver } from "./roomEnrollment.resolver";

@Module({
  imports: [RoomEnrollmentModuleBase],
  controllers: [RoomEnrollmentController],
  providers: [RoomEnrollmentService, RoomEnrollmentResolver],
  exports: [RoomEnrollmentService],
})
export class RoomEnrollmentModule {}
