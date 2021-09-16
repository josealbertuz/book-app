import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';

export type StackParamList = {
    Home: undefined,
    Details: { bookId: string, image?: number}
};

export type HomeScreenNavigationProps = NativeStackScreenProps<StackParamList, 'Home'>

export type DetailsScreenNavigationProps = NativeStackScreenProps<StackParamList, 'Details'>

export type BookListItemProps = {
    id: string,
    title: string,
    author?: string,
    image?: number
}

export type BookListProps = {
    books : BooksFound[]
}

export type RequestState<Type> = {
    data?: Type,
    isLoading: boolean,
    error: boolean
}

export type RequestAction<Type> = | 
{type: 'request'} |
{type: 'success', payload: Type } |
{type: 'error'}

export type BookFinderResponse = {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          BooksFound[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export type BooksFound = {
    key:                                   string;
    text:                                  string[];
    type:                                  string;
    seed:                                  string[];
    title:                                 string;
    title_suggest:                         string;
    has_fulltext:                          boolean;
    edition_count:                         number;
    edition_key:                           string[];
    publish_date?:                         string[];
    publish_year?:                         number[];
    first_publish_year?:                   number;
    lccn?:                                 string[];
    publish_place?:                        string[];
    oclc?:                                 string[];
    contributor?:                          string[];
    lcc?:                                  string[];
    ddc?:                                  string[];
    isbn?:                                 string[];
    last_modified_i:                       number;
    ebook_count_i:                         number;
    ia?:                                   string[];
    public_scan_b?:                        boolean;
    ia_collection_s?:                      string;
    lending_edition_s?:                    string;
    lending_identifier_s?:                 string;
    printdisabled_s?:                      string;
    cover_edition_key?:                    string;
    cover_i?:                              number;
    publisher?:                            string[];
    language?:                             string[];
    author_key?:                           string[];
    author_name?:                          string[];
    author_alternative_name?:              string[];
    person?:                               string[];
    place?:                                string[];
    subject?:                              string[];
    time?:                                 string[];
    id_alibris_id?:                        string[];
    id_amazon?:                            string[];
    id_canadian_national_library_archive?: string[];
    id_goodreads?:                         string[];
    id_google?:                            string[];
    id_librarything?:                      string[];
    id_overdrive?:                         string[];
    id_paperback_swap?:                    string[];
    id_wikidata?:                          string[];
    ia_loaded_id?:                         string[];
    ia_box_id?:                            string[];
    id_dep_sito_legal?:                    string[];
    publisher_facet?:                      string[];
    person_key?:                           string[];
    time_facet?:                           string[];
    place_key?:                            string[];
    person_facet?:                         string[];
    subject_facet?:                        string[];
    _version_:                             number;
    place_facet?:                          string[];
    lcc_sort?:                             string;
    author_facet?:                         string[];
    subject_key?:                          string[];
    time_key?:                             string[];
    ddc_sort?:                             string;
    first_sentence?:                       string[];
    subtitle?:                             string;
    id_bcid?:                              string[];
}
