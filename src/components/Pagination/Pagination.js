import React from 'react';
import "./Pagination.scss";
import { Pagination as PaginationAntd } from "antd";
export default function Pagination(props) {
    const { posts, location, history } = props;
    const currentPage = parseInt(posts.page);
    console.log(location);
    const onChangePage = newPage => { 
        history.push(`${location.pathname}?page=${newPage}`);
    }
    return (
       
            <PaginationAntd
                defaultCurrent={currentPage}
                total={posts.total}
                pageSize={ posts.limit}
                onChange={newPage => { onChangePage(newPage)}}
                className="pagination"/>
        
    )
}
