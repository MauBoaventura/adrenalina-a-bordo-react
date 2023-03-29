import { useEffect, useState } from 'react'
import CardSubMenu from 'components/molecules/CardSubMenu'
import * as S from './styles'
import { getCurrentClient } from 'utils/parseAssets'
import { ClientEnum } from 'utils/parseAssets/client-enum'
import { ClientsResourcesMapMock, ProfileResourcesMapMock, ResourceSectionsEnum, ResourcesEnum, ResourcesSectionsMap } from './resources-configs'

const HomeTemplate = () => {
    const [profile, setProfile] = useState(null)
    const [resourcesName, setResourcesName] = useState([])
    const [loadingPage, setLoadingPage] = useState(true)

    const getContexts = async () => {
        setLoadingPage(true)


        setLoadingPage(false)
    }

    const getResourcesNameByProfileMock = (profile: any) => {
        let profileResources = []
        const clientResources = ClientsResourcesMapMock[getCurrentClient()] || []

        profile?.profiles?.forEach((p) => {
            profileResources = [...profileResources, ...(ProfileResourcesMapMock[p] || [])]
        })

        return profile?.isAdmin ? clientResources : clientResources.filter((r) => profileResources.includes(r))
    }

    const showCardMenu = (resourceName: ResourcesEnum) => {
        return true
    }

    const showSection = (sectionName: ResourceSectionsEnum) => {
        return true
    }

    useEffect(() => {
        getContexts()
    }, [])

    return (
        <S.Container>
            {!loadingPage && (
                <>
                    {showSection(ResourceSectionsEnum.PROCESSAMENTO_CONTAS) && (
                        <>
                            <S.Title>Cadastro de Recursos</S.Title>
                            <S.CardFlex>
                                {showCardMenu(ResourcesEnum.ANALISE_DE_CONTAS) && (
                                    <CardSubMenu
                                        title="Barcos/Caiaques"
                                        image="/faturamento/assets/icons/money.svg"
                                        description="Cadastre barcos e outros instrumentos de passeio"
                                        link="processamento-contas/analise-contas"
                                    />
                                )}
                                {showCardMenu(ResourcesEnum.RECURSOS_DE_GLOSA) && (
                                    <CardSubMenu
                                        title="Guias"
                                        image="/faturamento/assets/icons/form.svg"
                                        description="Dados de guias cadastrados"
                                        link="processamento-contas/recurso-glosa"
                                    />
                                )}
                                {showCardMenu(ResourcesEnum.CALCULAR_GLOSA_BIOMETRIA) && (
                                    <CardSubMenu
                                        title="Lugares"
                                        image="/faturamento/assets/icons/mai-ic-shippingbox.mono.svg"
                                        description="Analise as justificativas biométricas e glose valores excedentes"
                                        // disabled={true}
                                        link=""
                                    />
                                )}
                            </S.CardFlex>
                        </>
                    )}

                    {showSection(ResourceSectionsEnum.CONTAS) && (
                        <>
                            <S.Title>Planejamento de passeio</S.Title>
                            <S.CardFlex>
                                {showCardMenu(ResourcesEnum.CONTAS_A_PAGAR) && (
                                    <CardSubMenu
                                        title="Cronograma"
                                        image="/faturamento/assets/icons/list.svg"
                                        description="Consulte e gerencie suas contas"
                                        onClick={() => (window.location.href = `${process.env.NEXT_PUBLIC_CONTAS}/contas-a-pagar`)}
                                    />
                                )}
                                {showCardMenu(ResourcesEnum.CONTAS_A_RECEBER) && (
                                    <CardSubMenu
                                        title="Rotinas"
                                        image="/faturamento/assets/icons/list.svg"
                                        description="Consulte, processe e gere cobranças"
                                        onClick={() => (window.location.href = `${process.env.NEXT_PUBLIC_CONTAS}/contas-a-receber`)}
                                    />
                                )}
                                {showCardMenu(ResourcesEnum.NEGOCIACOES_DE_DIVIDAS) && (
                                    <CardSubMenu
                                        title="Clientes"
                                        image="/faturamento/assets/icons/list.svg"
                                        description="Consulte e negocie dívidas atrasadas"
                                        onClick={() => (window.location.href = `${process.env.NEXT_PUBLIC_CONTAS}/negociacao`)}
                                    />
                                )}
                            </S.CardFlex>
                        </>
                    )}

                </>
            )}
        </S.Container>
    )
}

export default HomeTemplate
