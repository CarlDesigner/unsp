/* import { formatDistanceToNow, parseISO, format } from "date-fns";

export const getDateDistance = (date: string) =>
  formatDistanceToNow(parseISO(date), {
    addSuffix: true,
  });

export const formatDate = (
  date: string,
  formatDate: "long" | "short" = "long"
) => {
  const parseDate = parseISO(date);
  if (formatDate === "short") {
    return format(parseDate, "MMMM dd, yyyy zz");
  }

  return format(parseDate, "EEEE, MMMM d, yyyy h:mm a zz");
};

 */

import { formatDistanceToNow, parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export const getDateDistance = (date: string) =>
  formatDistanceToNow(parseISO(date), {
    addSuffix: true,
    locale: es, // Fechas en español
  });

export const formatDate = (
  date: string,
  formatType: "long" | "short" = "long"
) => {
  const parsedDate = parseISO(date);

  return format(parsedDate, "dd 'de' MMMM 'de' yyyy", { locale: es });
};
