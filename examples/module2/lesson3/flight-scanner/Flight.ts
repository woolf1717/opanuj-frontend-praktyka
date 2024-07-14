import z from 'zod';

export const flightFormSchema = z.object({
  origin: z
    .string()
    .min(3, { message: 'Origin must be at least 3 characters' }),
  destination: z.string(),
  tripType: z.enum(['oneWay', 'roundTrip']),
  startDate: z.string().refine((val) => new Date(val).getTime() > Date.now(), {
    message: 'Start date must be in the future',
  }),
  returnDate: z.string().optional(),
});

export type FlightFormFields = z.infer<typeof flightFormSchema>;
