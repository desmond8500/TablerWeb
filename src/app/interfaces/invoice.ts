export interface Invoice {
  id: string,
  projet_id: string,
  reference: string,
  status: string,
  description?: string,
  client_name?: string,
  client_tel?: string,
  client_address?: string,
  discount?: string,
  tva?: string,
  brs?: string,
}
