import { AxiosError } from 'axios'

export class StringUtils {
    static maskCharacters = (value: any): string => {
        if (!value) return ''
        if (value === '') return ''
        if (value === null) return ''

        const characters = value.replace(/[0-9]/g, '')

        // characters = characters.replace(/[^\w\s]/gi, '')

        return characters
    }

    static maskCpf = (cpfText: string): string => {
        if (!cpfText) return ''

        if (cpfText === '') return ''

        if (cpfText === null) return ''

        let cpf = cpfText.replace(/[^\d]/g, '')

        cpf = cpf.substring(0, 11)

        if (cpf.length > 3) {
            cpf = cpf.replace(/^(\d{3})(\d*)/, '$1.$2')
        }

        if (cpf.length > 7) {
            cpf = cpf.replace(/^(.{7})(\d*)/, '$1.$2')
        }

        if (cpf.length > 11) {
            cpf = cpf.replace(/^(.{11})(\d*)/, '$1-$2')
        }

        return cpf
    }

    static UnMaskCpf = (cpf: string): string => {
        return cpf.replaceAll(' ', '').replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')
    }

    static maskCnpj = (cnpjText: any): string => {
        if (!cnpjText) return ''

        if (cnpjText === '') return ''

        if (cnpjText === null) return ''

        let cnpj = cnpjText.replace(/[^\d]/g, '')

        cnpj = cnpj.substring(0, 14)

        if (cnpj.length > 2) {
            cnpj = cnpj.replace(/^(\d{2})(\d*)/, '$1.$2')
        }
        if (cnpj.length > 6) {
            cnpj = cnpj.replace(/^(.{6})(\d*)/, '$1.$2')
        }
        if (cnpj.length > 10) {
            cnpj = cnpj.replace(/^(.{10})(\d*)/, '$1/$2')
        }
        if (cnpj.length > 15) {
            cnpj = cnpj.replace(/^(.{15})(\d*)/, '$1-$2')
        }
        return cnpj
    }

    static UnMaskCnpj = (cnpj: string): string => {
        return cnpj.replaceAll(' ', '').replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')
    }

    static maskCep = (cepText: string): string => {
        if (!cepText) return ''

        if (cepText === '') return ''

        if (cepText === null) return ''

        let cep = cepText.replace(/[^\d]/g, '')

        cep = cep.substring(0, 8)

        if (cep.length > 5) {
            cep = cep.replace(/^(\d{5})(\d*)/, '$1-$2')
        }

        return cep
    }

    static UnMaskCep = (cep: string): string => {
        return cep.replaceAll(' ', '').replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')
    }

    static maskPhone = (value: string): string => {
        if (!value) return ''

        if (value === '') return ''

        if (value === null) return ''

        let phone = value.replace(/\D/g, '') //Remove tudo o que não é dígito

        if (phone.match(/^55/g)) {
            phone = phone.replace(/^(55)(\d{2})(\d+)/g, '+$1 ($2) $3')
        } else {
            phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
        }

        phone = phone.replace(/(\d)(\d{4})$/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígitos
        return phone
    }

    static maskCard = (value: string): string => {
        if (!value) return ''

        if (value === '') return ''

        if (value === null) return ''

        let time = value.replace(/[^\d]/g, '')

        time = time.substring(0, 16)

        if (time.length > 4) {
            time = time.replace(/^(\d{4})(\d*)/, '$1 $2')
        }
        if (time.length > 9) {
            time = time.replace(/^(.{9})(\d*)/, '$1 $2')
        }
        if (time.length > 14) {
            time = time.replace(/^(.{14})(\d*)$/, '$1 $2')
        }

        return time
    }

    static ajustandoString = (string: string) => {
        switch (string) {
            case 'ESPECIFICO':
                return 'Específico'
            case 'GERAL':
                return 'Todos'
            case 'RECURSO':
                return 'Recurso de Glosa'
            case 'ODONTO':
                return 'Odonto'
            case 'MEDICO':
                return 'Médico'
            default:
                return 'Erro na string'
        }
    }

    static situacaoLote = (string: string) => {
        switch (string) {
            case 'AGUARDANDO_DOCUMENTACAO':
                return 'Aguardando documentação'
            case 'PROCESSANDO':
                return 'Processando'
            case 'EM_AUDITORIA':
                return 'Em auditoria'
            case 'EM_ANALISE':
                return 'Em análise'
            case 'FECHADO':
                return 'Fechado'
            case 'CANCELADO':
                return 'Cancelado'
            case 'RECUSADO':
                return 'Recusado'
            case 'DEVOLVIDO':
                return 'Devolvido'
            case 'AGUARDANDO DOCUMENTACAO':
                return 'Aguardando documentação'
            case 'EM AUDITORIA':
                return 'Em auditoria'
            case 'EM ANALISE':
                return 'Em análise'
        }
    }

    static getFirstName = (name: string) => {
        if (name) {
            const myArray = name?.split(' ')

            return myArray[0]
        } else {
            return name
        }
    }
}

export const getMessageErrorFromApiResponse = (error: AxiosError<any>) => {
    return error?.response?.data?.mensagemDescricao || error?.response?.data?.message
}

export function capitalize(sentence: string) {
    if (!sentence) return

    const words = sentence.toLowerCase().split(' ')

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
        }
    }

    return words.join(' ')
}
