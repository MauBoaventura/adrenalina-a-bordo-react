import { ClientEnum } from 'utils/parseAssets/client-enum'

export enum ResourcesEnum {
    ANALISE_DE_CONTAS = 'ANALISE_DE_CONTAS',
    SECRETARIA = 'SECRETARIA',
    AUDITORIA_DE_BANCADA = 'AUDITORIA_DE_BANCADA',
    CALENDARIO_DE_CONTAS = 'CALENDARIO_DE_CONTAS',
    COBRANCA_MEDICO = 'COBRANCA_MEDICO',
    COBRANCA_ODONTO = 'COBRANCA_ODONTO',
    CONCILIACAO_DE_NOTAS = 'CONCILIACAO_DE_NOTAS',
    CONTAS_A_PAGAR = 'CONTAS_A_PAGAR',
    CONTAS_A_RECEBER = 'CONTAS_A_RECEBER',
    NEGOCIACOES_DE_DIVIDAS = 'NEGOCIACOES_DE_DIVIDAS',
    PARAMETROS_DE_CONFIGURACAO_FATURAMENTO = 'PARAMETROS_DE_CONFIGURACAO_FATURAMENTO',
    PROCESSOS_DE_FATURAMENTO = 'PROCESSOS_DE_FATURAMENTO',
    RECURSO_DE_GLOSA_MEDICO = 'RECURSO_DE_GLOSA_MEDICO',
    RECURSO_DE_GLOSA_ODONTO = 'RECURSO_DE_GLOSA_ODONTO',
    RECURSOS_DE_GLOSA = 'RECURSOS_DE_GLOSA',
    REGRAS_DE_EXCLUDENCIA = 'REGRAS_DE_EXCLUDENCIA',
    RELATORIOS = 'RELATORIOS',
    SIMULADOR_DE_ENVIO_DE_XML = 'SIMULADOR_DE_ENVIO_DE_XML',
    // Adicionar esses no enum de resources do gestao de usuarios:
    ASSOCIACAO_DE_CAIXA = 'ASSOCIACAO_DE_CAIXA',
    CALCULAR_GLOSA_BIOMETRIA = 'CALCULAR_GLOSA_BIOMETRIA',
    COMPOSICAO_FATURAMENTO = 'COMPOSICAO_FATURAMENTO'
}

export enum ResourceSectionsEnum {
    PROCESSAMENTO_CONTAS = 'PROCESSAMENTO_CONTAS',
    CONTAS = 'CONTAS',
    RELATORIOS = 'RELATORIOS',
    PARAMETROS = 'PARAMETROS',
    MEDICO = 'MEDICO',
    ODONTO = 'ODONTO',
    SIMULACAO = 'SIMULACAO'
}

export const ResourcesSectionsMap = {
    [ResourceSectionsEnum.PROCESSAMENTO_CONTAS]: [
        ResourcesEnum.CALENDARIO_DE_CONTAS,
        ResourcesEnum.AUDITORIA_DE_BANCADA,
        ResourcesEnum.ANALISE_DE_CONTAS,
        ResourcesEnum.RECURSOS_DE_GLOSA,
        ResourcesEnum.CONCILIACAO_DE_NOTAS,
        ResourcesEnum.ASSOCIACAO_DE_CAIXA,
        ResourcesEnum.CALCULAR_GLOSA_BIOMETRIA,
        ResourcesEnum.COMPOSICAO_FATURAMENTO
    ],
    [ResourceSectionsEnum.CONTAS]: [ResourcesEnum.CONTAS_A_PAGAR, ResourcesEnum.CONTAS_A_RECEBER, ResourcesEnum.NEGOCIACOES_DE_DIVIDAS],
    [ResourceSectionsEnum.RELATORIOS]: [ResourcesEnum.RELATORIOS],
    [ResourceSectionsEnum.PARAMETROS]: [ResourcesEnum.REGRAS_DE_EXCLUDENCIA],
    [ResourceSectionsEnum.MEDICO]: [ResourcesEnum.COBRANCA_MEDICO, ResourcesEnum.RECURSO_DE_GLOSA_MEDICO],
    [ResourceSectionsEnum.ODONTO]: [ResourcesEnum.COBRANCA_ODONTO, ResourcesEnum.RECURSO_DE_GLOSA_ODONTO],
    [ResourceSectionsEnum.SIMULACAO]: [ResourcesEnum.SIMULADOR_DE_ENVIO_DE_XML]
}

export const ProfileResourcesMapMock = {
    PRESTADOR: [
        ResourcesEnum.COBRANCA_MEDICO,
        ResourcesEnum.RECURSO_DE_GLOSA_MEDICO,
        ResourcesEnum.COBRANCA_ODONTO,
        ResourcesEnum.RECURSO_DE_GLOSA_ODONTO
    ]
}

export const ClientsResourcesMapMock = {
    [ClientEnum.MAIDA]: [
        ResourcesEnum.CALENDARIO_DE_CONTAS,
        ResourcesEnum.AUDITORIA_DE_BANCADA,
        ResourcesEnum.ANALISE_DE_CONTAS,
        ResourcesEnum.RECURSOS_DE_GLOSA,
        ResourcesEnum.CONCILIACAO_DE_NOTAS,
        ResourcesEnum.ASSOCIACAO_DE_CAIXA,
        ResourcesEnum.CALCULAR_GLOSA_BIOMETRIA,
        ResourcesEnum.COMPOSICAO_FATURAMENTO,
        ResourcesEnum.CONTAS_A_PAGAR,
        ResourcesEnum.CONTAS_A_RECEBER,
        ResourcesEnum.NEGOCIACOES_DE_DIVIDAS,
        ResourcesEnum.RELATORIOS,
        ResourcesEnum.REGRAS_DE_EXCLUDENCIA,
        ResourcesEnum.COBRANCA_MEDICO,
        ResourcesEnum.RECURSO_DE_GLOSA_MEDICO,
        ResourcesEnum.COBRANCA_ODONTO,
        ResourcesEnum.RECURSO_DE_GLOSA_ODONTO,
        ResourcesEnum.SIMULADOR_DE_ENVIO_DE_XML
    ],
    [ClientEnum.POSTAL]: [
        ResourcesEnum.CALENDARIO_DE_CONTAS,
        ResourcesEnum.AUDITORIA_DE_BANCADA,
        ResourcesEnum.ANALISE_DE_CONTAS,
        ResourcesEnum.RECURSOS_DE_GLOSA,
        ResourcesEnum.ASSOCIACAO_DE_CAIXA,
        ResourcesEnum.CONCILIACAO_DE_NOTAS,
        ResourcesEnum.CONTAS_A_PAGAR,
        ResourcesEnum.CONTAS_A_RECEBER,
        ResourcesEnum.NEGOCIACOES_DE_DIVIDAS,
        ResourcesEnum.RELATORIOS,
        ResourcesEnum.REGRAS_DE_EXCLUDENCIA,
        ResourcesEnum.COBRANCA_MEDICO,
        ResourcesEnum.RECURSO_DE_GLOSA_MEDICO,
        ResourcesEnum.COBRANCA_ODONTO,
        ResourcesEnum.RECURSO_DE_GLOSA_ODONTO
    ],
    [ClientEnum.PLANSERV]: [
        ResourcesEnum.CALENDARIO_DE_CONTAS,
        ResourcesEnum.ANALISE_DE_CONTAS,
        ResourcesEnum.RECURSOS_DE_GLOSA,
        ResourcesEnum.CALCULAR_GLOSA_BIOMETRIA,
        ResourcesEnum.COMPOSICAO_FATURAMENTO,
        ResourcesEnum.RELATORIOS,
        ResourcesEnum.REGRAS_DE_EXCLUDENCIA,
        ResourcesEnum.COBRANCA_MEDICO,
        ResourcesEnum.RECURSO_DE_GLOSA_MEDICO
    ]
}
