import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChevronDownIcon from '../../icons/ChevronDownIcon';
import { getMockTvDetail, getMockTvVideos } from '../../utils/getMockData';
import * as Styled from './styles/ContentBottomPanel';

const getTvDetailLink = (id: number): string => {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko`;
};

const getTvVideosLink = (id: number): string => {
  return `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko`;
};

const getYoutubeLink = (key: string): string => {
  return `https://www.youtube.com/watch?v=${key}`;
};

interface Props {
  id: number;
  isMouseOn: boolean;
  transLength: {
    x: string;
    y: string;
  } | null;
  toggleModal: () => void;
}

export default function ContentBottomPanel({ id, isMouseOn, transLength, toggleModal }: Props) {
  const [tvDetail, setTvDetail] = useState<TvDetail.RootObject>();
  const [tvVideos, setTvVideos] = useState<TvVideos.RootObject>();

  const getTvDetail = async () => {
    const link = getTvDetailLink(id);
    const response = await axios.get<TvDetail.RootObject>(link);
    setTvDetail(response.data);
  };

  const getTvVideos = async () => {
    const link = getTvVideosLink(id);
    const response = await axios.get<TvVideos.RootObject>(link);
    setTvVideos(response.data);
  };

  const getData = () => {
    if (!tvDetail) getTvDetail();
    if (!tvVideos) getTvVideos();
  };

  const getMockData = () => {
    setTvDetail(getMockTvDetail());
    setTvVideos(getMockTvVideos());
  };

  useEffect(() => {
    if (transLength) {
      getMockData();
      // getData();
    }
  }, [transLength]);

  return (
    <Styled.Container isMouseOn={isMouseOn} transLength={transLength}>
      {!transLength && isMouseOn && (
        <Styled.PanelButton onClick={toggleModal}>
          <ChevronDownIcon />
        </Styled.PanelButton>
      )}
      {transLength && tvDetail && (
        <>
          <Styled.LinkContainer>
            <Styled.PageLink href={tvDetail.homepage} target="_blank">
              공식 홈페이지
            </Styled.PageLink>
            {tvVideos &&
              tvVideos.results.map(
                (result) =>
                  result.type === 'Trailer' &&
                  result.site === 'YouTube' && (
                    <Styled.PageLink key={result.id} href={getYoutubeLink(result.key)} target="_blank">
                      {result.name.split('|')[1]}
                    </Styled.PageLink>
                  )
              )}
          </Styled.LinkContainer>
          <Styled.Overview>{tvDetail.overview.split('. ').join('.\n').split('?').join('?\n')}</Styled.Overview>
          <Styled.Text>
            <Styled.GrayText>장르: </Styled.GrayText>
            {tvDetail.genres.map((genre, index) => (
              <span key={genre.id}>
                {index === tvDetail.genres.length - 1 ? <>{genre.name}</> : <>{genre.name}, </>}
              </span>
            ))}
          </Styled.Text>
          <Styled.Text>
            <Styled.GrayText>첫 방송 날짜: </Styled.GrayText>
            {tvDetail.first_air_date.split('-').join('.')}
          </Styled.Text>
          <Styled.Text>
            <Styled.GrayText>시즌 수: </Styled.GrayText>
            {tvDetail.number_of_seasons}개
          </Styled.Text>
          <Styled.Text>
            <Styled.GrayText>회원 평점: </Styled.GrayText>
            {tvDetail.vote_average}
          </Styled.Text>
          {tvDetail.created_by.length !== 0 && (
            <Styled.Text>
              <Styled.GrayText>제작: </Styled.GrayText>
              {tvDetail.created_by.map((person, index) => (
                <span key={person.id}>
                  {index === tvDetail.created_by.length - 1 ? <>{person.name}</> : <>{person.name}, </>}
                </span>
              ))}
            </Styled.Text>
          )}
        </>
      )}
    </Styled.Container>
  );
}
