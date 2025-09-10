import { ToolNode } from "@langchain/langgraph/prebuilt";
import { tool } from '@langchain/core/tools';
import z from "zod";
import type { RunnableFunc } from "@langchain/core/runnables";
import { FourSquareParamsSchema } from "../schemas/FourSquareQuerySchema.js";

export function getAgentTools(): ToolNode {
    const runnableParser: RunnableFunc<unknown, z.infer<typeof FourSquareParamsSchema> | null> = (msg) => {
        console.log({ label: "The agent called the tool parser-content", msg })
        if (typeof msg !== 'string') return null;
        try {
            JSON.parse(msg);
            return FourSquareParamsSchema.parse(msg);
        }
        catch {
            return null
        }
    }
    const parserTool = tool(runnableParser, {
        name: 'parser-content',
        description: 'make sure the json output adheres to the schema, should be run at most 2 times',
        schema: z.string(),
    })

    return new ToolNode([parserTool]);
}
