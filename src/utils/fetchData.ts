export async function fetchData(url: string): Promise<EmployeesResponse> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data: EmployeesResponse = await response.json();

    return data;
  } catch (err) {
    console.error("Erro ao buscar os dados:", err);
    throw err;
  }
}

export interface Employees {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

type EmployeesResponse = Employees[];
