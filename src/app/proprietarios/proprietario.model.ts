export interface Proprietario {
    id: number;
    nome: string;
    endereco: string;
}

export interface CreateProprietario {
    nome: string;
    endereco: string;
}

export interface UpdateProprietario {
    nome: string;
    endereco: string;
}