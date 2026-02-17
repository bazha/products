# Products Microservice

NestJS microservice for product management with gRPC and RabbitMQ support, backed by PostgreSQL.

## Technology Stack

- **Framework**: NestJS 10.x with TypeScript 5.x
- **Database**: PostgreSQL with TypeORM 0.3.x
- **Communication**: gRPC (port 3002) & RabbitMQ
- **Runtime**: Node.js 20.x

## Features

- Product CRUD operations (id, name, description, price)
- gRPC service `ProductsService` with `GetProducts` RPC
- RabbitMQ message pattern `getProducts` on queue `products_queue`
- Environment-based configuration with validation
- Graceful shutdown and Docker support

## Prerequisites

Node.js 20.x, PostgreSQL 12.x, RabbitMQ 3.x

## Installation & Configuration

```bash
npm install
```

Create `.env` file with required variables:

```env
# Database (required)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=products_db

# RabbitMQ (optional)
RABBITMQ_URL=amqp://localhost:5672
RABBITMQ_QUEUE=products_queue

# gRPC (optional)
GRPC_PACKAGE=products
GRPC_URL=0.0.0.0:3002
NODE_ENV=development
```

## Running

```bash
npm run start:dev    # Development with watch mode
npm run build        # Build for production
npm run start:prod   # Run production build

# Docker
docker build -t products-microservice .
docker run -p 3002:3002 --env-file .env products-microservice
```

## Testing

```bash
npm test              # Unit tests
npm run test:e2e      # E2E tests
npm run test:cov      # Coverage
```

## API

### gRPC - GetProducts
```protobuf
service ProductsService {
  rpc GetProducts (GetProductsRequest) returns (GetProductsResponse);
}

message Product {
  int32 id = 1;
  string name = 2;
  string description = 3;
  double price = 4;
}
```

### RabbitMQ
- **Pattern**: `getProducts`
- **Payload**: string (filter)
