import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { AppError } from "./lib/errorHandler";
import logger from "./lib/logger";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate request body
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        throw new AppError(validationError.message, 400);
      }

      // Store the contact message
      const savedMessage = await storage.createContactMessage(result.data);
      
      logger.info({
        message: "Contact message received",
        id: savedMessage.id
      });
      
      return res.status(201).json({
        message: "Contact message received successfully",
        id: savedMessage.id
      });
      
    } catch (error) {
      next(error);
    }
  });

  // Get all contact messages (for demonstration)
  app.get("/api/contact", async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      next(error);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
