import express from 'express';
import { tempTest, tempException } from '../controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

tempRouter.get('/exception/:flag',tempException);

// 미션 목록 조회(진행중, 진행 완료)
// tempRouter.get('/', tempTest);
