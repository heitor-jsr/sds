import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        })
    }, [pageNumber])

    return (
        /* Funções de componentes react só podem exportar um componente.
        para que dê certo a exportação de ambos, os componentes devem
        estar dentro de uma div (ou do fragment que é o <></> sem div 
        dentro). */

        /* nas divs abaixo foram adcionados breakpoints do bootstrap
        para fazer com que os itens de cada div ocupem uma porção da tela, 
        tomando por parametro o seu tamanho (se for considerada tela menor
        que small < 576px - apenas uma div é exibida - se for maior, 
        6 são exibidas; se for larga (lg) ≥ 992px, 4 são exibidas; se for
        extralargo, 3 são exibidas - https://getbootstrap.com/docs/5.0/layout/breakpoints/)
        Isso vai permitir que voce controle quantos cards são exibidos na tela
        de acordo com o tamanho tela, impedindo que todo card ocupe a largura
        total da tela*/
        /*o mb-3 vai adicionar uma margin-botton de 3px em cada div*/
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (<div key ={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard movie={movie} />
                    </div>))
                    }
                </div>

            </div>

        </>
    );
}

export default Listing;