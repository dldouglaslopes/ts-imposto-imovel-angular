export interface Imovel {
    id: number;
    idProprietario: number;
    endereco: string;
    areaTerreno: number;
    areaConstruida: number;
    areaTotal: number;
    aliquota: number;
    venalTerreno: number;
    venalConstrucao: number;
    venalTotal: number;
    aliquotaAplicada: number;
    imposto: number;
}

export interface CreateImovel {
    idProprietario: number;
    endereco: string;
    areaTerreno: number;
    areaConstruida: number;
    areaTotal: number;
    aliquota: number;
    venalTerreno: number;
    venalConstrucao: number;
    venalTotal: number;
    aliquotaAplicada: number;
    imposto: number;
}

export interface UpdateImovel {
    idProprietario: string;
    endereco: string;
    areaTerreno: string;
    areaConstruida: string;
    areaTotal: string;
    aliquota: string;
    venalTerreno: string;
    venalConstrucao: string;
    venalTotal: string;
    aliquotaAplicada: string;
    imposto: string;
}