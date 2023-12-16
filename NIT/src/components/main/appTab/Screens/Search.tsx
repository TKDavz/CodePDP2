import { View, Text, StatusBar, ScrollView, Modal } from 'react-native'
import React from 'react'
import { Colors, styles } from '../../../customs/Styles'
import SearchInput from '../../../customs/forms/SearchInput'
import LatestNews from '../appModals/LatestNews'
import Reccomendation from '../appModals/Reccomendation'
import { New3, newsData } from './data_1'
import ReadNew from '../appModals/ReadNew'
import { NewsContext } from '../NewsContext'

const Search = () => {
  const [searchKeyword, setSearchKeyword] = React.useState('');

  // const newsDataTemp = newsData;
  const newsDataTemp: New3[] = newsData;
  const { listNews, setListNewsData } = React.useContext(NewsContext);
  const [newsSelected, setNewsSelected] = React.useState(newsDataTemp[0]);
  const [newsDataList, setNewsDataList] = React.useState(newsDataTemp);

  const [visible, setVisible] = React.useState(false);

  const onSearch = (text: string) => {
    console.log(text);
    const matchingObjects = newsDataTemp.filter(function (obj) {
      return obj.title?.includes(searchKeyword);
    });

    setNewsDataList(matchingObjects);
    // console.log(newsDataTemp);
    // console.log(newsData);
  }

  return (
    <ScrollView style={[styles.container2]} showsVerticalScrollIndicator={false}>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => { setVisible(false) }}
      >
        <ReadNew
          title={newsSelected?.title}
          content={newsSelected?.content}
          tag={newsSelected?.category}
          cover={newsSelected?.cover}
          commentCount={newsSelected?.commentCount}
          viewCount={newsSelected?.viewCount}
          onBack={() => { setVisible(false) }}
          onItemReccomendPress={(item) => { setNewsSelected(item) }}
          url={newsSelected.url}
          newsID={newsSelected.id}
          author={newsSelected.author}
          publishDate={newsSelected.publishDate}
        />
      </Modal>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <SearchInput onChangeText={(text) => { setSearchKeyword(text) }}
        onSearchPress={() => { onSearch(searchKeyword) }}
      />

      <LatestNews dataNews={newsDataList} style={{ marginBottom: 55, marginTop: 15 }} 
      onItemPress={(item) => {setNewsSelected(item); setVisible(true)}}/>

      <Reccomendation onItemPress={(item) => {setNewsSelected(item); setVisible(true)}} />
    </ScrollView>
  )
}

export default Search