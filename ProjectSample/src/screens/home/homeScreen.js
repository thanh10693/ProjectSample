import React, {useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import queryString from 'query-string';
import actions from 'redux/actions';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const fetchBusinesses = useCallback(() => {
    dispatch({
      type: actions.GET_TOKEN,
      body: queryString.stringify({
        username: 'ims',
        password: '5rr4ccJqBzgVIifDMGqULpkTBmZdb1Lp',
      }),
    });
  }, []);

  useEffect(() => {
    fetchBusinesses();
    // function getToken() {
    //   dispatch({
    //     type: actions.GET_TOKEN,
    //     body: queryString.stringify({
    //       username: 'ims',
    //       password: '5rr4ccJqBzgVIifDMGqULpkTBmZdb1Lp',
    //     }),
    //   });
    // }
    // getToken();
  }, [fetchBusinesses]);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
