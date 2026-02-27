import * as z from 'zod';

export const EmployeeSchema = z.object({
  id: z.number(),
  employee_name: z.string(),
  employee_salary: z.string(),
  employee_age: z.string(),
  profile_image: z.string().optional(),
});

// Generic API response wrapper
export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    status: z.string(),
    data: dataSchema,
    message: z.string(),
  });

export const EmployeeListResponseSchema = ApiResponseSchema(z.array(EmployeeSchema));
export const EmployeeSingleResponseSchema = ApiResponseSchema(EmployeeSchema);

export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeListResponse = z.infer<typeof EmployeeListResponseSchema>;
export type EmployeeSingleResponse = z.infer<typeof EmployeeSingleResponseSchema>;
