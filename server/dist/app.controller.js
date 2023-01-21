"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const product_service_1 = require("./services/product.service");
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts(res) {
        try {
            const products = await this.productService.products({});
            return res.status(common_1.HttpStatus.OK).json({ products });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        }
    }
    async getProductById(id, res) {
        const product = await this.productService.product({ id });
        try {
            if (!product)
                throw Error('not_found');
            return res.status(common_1.HttpStatus.OK).json({ product });
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.message) === 'not_found') {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({ error });
            }
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        }
    }
    async uploadProduct(productData, res) {
        console.log(productData);
        try {
            const product = await this.productService.createProduct(productData);
            return res.status(common_1.HttpStatus.OK).json({ product });
        }
        catch (error) {
            console.log(error);
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        }
    }
    async deleteProduct(id, res) {
        try {
            await this.productService.deleteProduct({ id });
            return res.status(common_1.HttpStatus.OK).json({ success: true });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        }
    }
};
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('products/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Post)('products'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadProduct", null);
__decorate([
    (0, common_1.Delete)('products/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteProduct", null);
AppController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map