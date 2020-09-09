import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PriceSlider from './PriceSlider';
import 'react-rangeslider/lib/index.css';

class ProductCol extends React.Component {
    render() {
        const product = this.props.product;

        return (
            <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">

                <div class="block2">
                    <div class="block2-img wrap-pic-w of-hidden pos-relative block2">
                        <img src={product.image} alt="IMG-PRODUCT" />

                        <div class="block2-overlay trans-0-4">
                            <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                            </a>

                            <div class="block2-btn-addcart w-size1 trans-0-4">
                                <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="block2-txt p-t-20">
                        <a href={`product/${product.guid}`} class="block2-name dis-block s-text3 p-b-5">
                            {product.name}
                        </a>

                        <span class="block2-price m-text6 p-r-5">
                            ${product.price}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class ProductGrid extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const filterPrice = this.props.filterPrice;
        const sortingValue = this.props.sortingValue;
        const sortingPrice = this.props.sortingPrice;

        const cols = [];

        let products = this.props.products;

        // handle ascending, descending, and default sorting of products 
        switch (sortingValue) {
            case 'Price: low to high':
                products.sort((a, b) => (a.price - b.price))
                break;
            case 'Price: high to low':
                products.sort((a, b) => (b.price - a.price))
                break;
            case 'Popularity':
            case 'Default Sorting':
                products.sort((a, b) => (a.index - b.index))
                break;
            default:
                products.sort((a, b) => (a.index - b.index))
        }

        products.forEach((product) => {
            let min = 0, 
                max = 500;

            // TODO: adjust logic here to instead pull integer values from strings
            switch (sortingPrice) {
                case '$0.00 - $50.00':
                    min = 0; max = 50;
                    break;
                case '$50.00 - $100.00':
                    min = 50; max = 100;
                    break;
                case '$100.00 - $150.00':
                    min = 100; max = 150;
                    break;
                case '$150.00 - $200.00':
                    min = 150; max = 200;
                    break;
                case '$200.00+':
                    min = 200; max = 500;
                    break;
                default:
                    min = 0; max = 500;
            }

            // only return products that match the search filter
            if (product.name.indexOf(filterText) === -1) {
                return;
            }

            // remove products that are not active from listing
            if (!product.isActive) {
                return;
            }

            // only show products that are within the price slider's max range
            if (product.price > filterPrice) {
                return;
            }

            // only show products that are within the sorting dropdown's price range
            if (product.price < min || product.price > max) {
                return;
            }

            cols.push(
                <ProductCol
                    product={product}
                    key={product.index}
                />
            );
        });

        return (
            <div className="row">
                {cols}
            </div>
        );
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterPrice: 500,
            products: [],
            sortingValue: '',
            sortingPrice: '',
            error: null
        };
    }

    // Get listing of all products 

    getMany = () => {
        axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL')
            .then(res => {
                const products = res.data;
                // Add index for default order sorting
                products.forEach(function(product, index) {
                    product.index = index;
                });
                this.setState({ products });
            }).catch(error => {
                console.log(error.response)
            });
    }

    componentDidMount() {
        this.getMany();
    }

    handleSearchTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        });
    }

    handleFilterPriceChange = (filterPrice) => {
        this.setState({
            filterPrice: filterPrice
        });
    }

    handleSortingChange = (e) => {
        this.setState({
            sortingValue: e.target.value
        });
    }

    handleSortingPriceChange = (e) => {
        this.setState({
            sortingPrice: e.target.value
        });
    }

    render() {
        return (
            <div>
                <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{ backgroundImage: `url(${require('../images/heading-pages-02.jpg')})` }}>
                    <h2 class="l-text2 t-center">
                        Women
                    </h2>
                    <p class="m-text13 t-center">
                        New Arrivals Women Collection 2018
                    </p>
                </section>
                <section class="bgwhite p-t-55 p-b-65">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
                                <div class="leftbar p-r-20 p-r-0-sm">
                                    <h4 class="m-text14 p-b-7">
                                        Categories
                                    </h4>

                                    <ul class="p-b-54">
                                        <li class="p-t-4">
                                            <a href="#" class="s-text13 active1">
                                                All
                                            </a>
                                        </li>

                                        <li class="p-t-4">
                                            <a href="#" class="s-text13">
                                                Women
                                            </a>
                                        </li>

                                        <li class="p-t-4">
                                            <a href="#" class="s-text13">
                                                Men
                                            </a>
                                        </li>

                                        <li class="p-t-4">
                                            <a href="#" class="s-text13">
                                                Kids
                                            </a>
                                        </li>

                                        <li class="p-t-4">
                                            <a href="#" class="s-text13">
                                                Accesories
                                            </a>
                                        </li>
                                    </ul>

                                    <h4 class="m-text14 p-b-32">
                                        Filters
                                    </h4>

                                    <div class="filter-price p-t-22 p-b-50 bo3">
                                        <div class="m-text15 p-b-17">
                                            Price
                                        </div>

                                        <div class="wra-filter-bar">
                                            <PriceSlider
                                                filterPrice={this.state.filterPrice}
                                                onFilterPriceChange={this.handleFilterPriceChange}
                                            />
                                        </div>
                                    </div>

                                    <div class="filter-color p-t-22 p-b-50 bo3">
                                        <div class="m-text15 p-b-12">
                                            Color
                                        </div>

                                        <ul class="flex-w">
                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" />
                                                <label class="color-filter color-filter1" for="color-filter1"></label>
                                            </li>

                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" />
                                                <label class="color-filter color-filter2" for="color-filter2"></label>
                                            </li>

                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" />
                                                <label class="color-filter color-filter3" for="color-filter3"></label>
                                            </li>

                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" />
                                                <label class="color-filter color-filter4" for="color-filter4"></label>
                                            </li>

                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" />
                                                <label class="color-filter color-filter5" for="color-filter5"></label>
                                            </li>

                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" />
                                                <label class="color-filter color-filter6" for="color-filter6"></label>
                                            </li>

                                            <li class="m-r-10">
                                                <input class="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" />
                                                <label class="color-filter color-filter7" for="color-filter7"></label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="search-product pos-relative bo4 of-hidden">

                                        <SearchBar
                                            filterText={this.state.filterText}
                                            onSearchTextChange={this.handleSearchTextChange}
                                        />

                                        <button class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                                            <i class="fs-12 fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">

                                <div class="flex-sb-m flex-w p-b-35">
                                    <div class="flex-w">
                                        <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                            <select class="selection-2" name="sorting" value={this.state.sortingValue} onChange={this.handleSortingChange}>
                                                <option>Default Sorting</option>
                                                <option>Popularity</option>
                                                <option>Price: low to high</option>
                                                <option>Price: high to low</option>
                                            </select>
                                        </div>

                                        <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                            <select class="selection-2" name="sorting" value={this.state.sortingPrice} onChange={this.handleSortingPriceChange}>
                                                <option>Price</option>
                                                <option>$0.00 - $50.00</option>
                                                <option>$50.00 - $100.00</option>
                                                <option>$100.00 - $150.00</option>
                                                <option>$150.00 - $200.00</option>
                                                <option>$200.00+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <span class="s-text8 p-t-5 p-b-5">
                                        Showing 1–12 of 16 results
                                    </span>
                                </div>

                                <ProductGrid
                                    products={this.state.products}
                                    filterText={this.state.filterText}
                                    filterPrice={this.state.filterPrice}
                                    sortingValue={this.state.sortingValue}
                                    sortingPrice={this.state.sortingPrice}
                                />

                                <div class="pagination flex-m flex-w p-t-26">
                                    <a href="#" class="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                                    <a href="#" class="item-pagination flex-c-m trans-0-4">2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default ProductList;