import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {
    sessions: {}
  }
}

const prisma = new PrismaClient();

export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data>){
  if(req.method === "GET"){
    const sessions = await prisma.sessions.findMany({
      where: {
        isPublic: true
      },

      include: {
        sessionAuthor: true
      }
    })

    res.json({ message: "Retrieved All Public Sessions", payload: { sessions }});
  }
}
