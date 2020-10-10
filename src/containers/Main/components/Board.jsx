import React, {memo} from 'react'
import PropTypes from 'prop-types'
import {Grid,Skeleton} from '../../../components'
import Card from './Card'

function Board({data}){
    const {cases,todayDeaths,recovered,deaths,todayCases, critical, totalTests} = data
    
const getValue = (value) => value ? value: <Skeleton variant="text" width={182} height={60}/>

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#6d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F78829"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#f37"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(critical)} label="Casos Graves" color="#838"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de Mortes" color="#000"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Total de recuperados" color="#53f"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(totalTests)} label="Pessoas testadas" color="#aaF"/>
            </Grid>
        </Grid>
    )
}

export default memo(Board);