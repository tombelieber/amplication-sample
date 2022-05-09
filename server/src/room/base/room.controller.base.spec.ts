import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { RoomController } from "../room.controller";
import { RoomService } from "../room.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  billingDate: new Date(),
  capcity: 42,
  createdAt: new Date(),
  id: "exampleId",
  remainingCapcity: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  billingDate: new Date(),
  capcity: 42,
  createdAt: new Date(),
  id: "exampleId",
  remainingCapcity: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    billingDate: new Date(),
    capcity: 42,
    createdAt: new Date(),
    id: "exampleId",
    remainingCapcity: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  billingDate: new Date(),
  capcity: 42,
  createdAt: new Date(),
  id: "exampleId",
  remainingCapcity: 42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Room", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RoomService,
          useValue: service,
        },
      ],
      controllers: [RoomController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /rooms", async () => {
    await request(app.getHttpServer())
      .post("/rooms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        billingDate: CREATE_RESULT.billingDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /rooms", async () => {
    await request(app.getHttpServer())
      .get("/rooms")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          billingDate: FIND_MANY_RESULT[0].billingDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /rooms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rooms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rooms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rooms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        billingDate: FIND_ONE_RESULT.billingDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
