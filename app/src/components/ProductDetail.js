import React from 'react';
import axios from 'axios';

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

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.isActive) {
                return;
            }
            rows.push(
                <ProductCol
                    product={product}
                    key={product.name}
                />
            );
        });

        return (
            <div className="row">
                {rows}
            </div>
        );
    }
}

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
        };
    }

    // retrieve single product 

    getSingle = (guid) => {
        axios.get('https://next.json-generator.com/api/json/get/EkzBIUWNL/')
            .then(res => {
                const products = res.data;
                const product = products.find(item => item.guid === guid);
                this.setState({ product });
            }).catch(error => {
                console.log(error.response)
            });
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const productID = params.guid;
        this.getSingle(productID);
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <div class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
                    <a href="index.html" class="s-text16">
                        Home
                        <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
                    </a>

                    <a href="product.html" class="s-text16">
                        Women
                        <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
                    </a>

                    <a href="#" class="s-text16">
                        T-Shirt
                        <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
                    </a>

                    <span class="s-text17">
                        {product.name}
                    </span>
                </div>

                <div class="container bgwhite p-t-35 p-b-80">
                    <div class="flex-w flex-sb">
                        <div class="w-size13 p-t-30 respon5">
                            <div class="wrap-slick3 flex-sb flex-w">

                                <div class="item-slick3 main" data-thumb="images/thumb-item-01.jpg">
                                    <div class="wrap-pic-w">
                                        <img src={product.image} alt="IMG-PRODUCT" />
                                    </div>
                                </div>

                                <div class="slick3">
                                    <div class="item-slick3" data-thumb="images/thumb-item-01.jpg">
                                        <div class="wrap-pic-w">
                                            <img src={product.image} alt="IMG-PRODUCT" />
                                        </div>
                                    </div>

                                    <div class="item-slick3" data-thumb="images/thumb-item-02.jpg">
                                        <div class="wrap-pic-w">
                                            <img src={product.image} alt="IMG-PRODUCT" />
                                        </div>
                                    </div>

                                    <div class="item-slick3" data-thumb="images/thumb-item-03.jpg">
                                        <div class="wrap-pic-w">
                                            <img src={product.image} alt="IMG-PRODUCT" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-size14 p-t-30 respon5">
                            <h4 class="product-detail-name m-text16 p-b-13">
                                {product.name}
                            </h4>

                            <span class="m-text17">
                                ${product.price}
                            </span>

                            <p class="s-text8 p-t-10">
                                {product.about}
                            </p>

                            <div class="p-t-33 p-b-60">
                                <div class="flex-m flex-w p-b-10">
                                    <div class="s-text15 w-size15 t-center">
                                        Size
                                    </div>

                                    <div class="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
                                        <select class="selection-2" name="size">
                                            <option>Choose an option</option>
                                            <option>Size S</option>
                                            <option>Size M</option>
                                            <option>Size L</option>
                                            <option>Size XL</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="flex-m flex-w">
                                    <div class="s-text15 w-size15 t-center">
                                        Color
                                    </div>

                                    <div class="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
                                        <select class="selection-2" name="color">
                                            <option>Choose an option</option>
                                            <option>Gray</option>
                                            <option>Red</option>
                                            <option>Black</option>
                                            <option>Blue</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="flex-r-m flex-w p-t-10">
                                    <div class="w-size16 flex-m flex-w">
                                        <div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                            <button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                                <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                                            </button>

                                            <input class="size8 m-text18 t-center num-product" type="number" name="num-product" value="1" />

                                            <button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                                <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>

                                        <div class="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                                            <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-b-45">
                                <span class="s-text8 m-r-35">SKU: MUG-01</span>
                                <span class="s-text8">Categories: Mug, Design</span>
                            </div>

                            <div class="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
                                <h5 class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                                    Description
                                    <i class="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                                    <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                                </h5>

                                <div class="dropdown-content dis-none p-t-15 p-b-23">
                                    <p class="s-text8">
                                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                    </p>
                                </div>
                            </div>

                            <div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
                                <h5 class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                                    Additional information
                                    <i class="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                                    <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                                </h5>

                                <div class="dropdown-content dis-none p-t-15 p-b-23">
                                    <p class="s-text8">
                                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                    </p>
                                </div>
                            </div>

                            <div class="wrap-dropdown-content bo7 p-t-15 p-b-14">
                                <h5 class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                                    Reviews (0)
                                    <i class="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                                    <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                                </h5>

                                <div class="dropdown-content dis-none p-t-15 p-b-23">
                                    <p class="s-text8">
                                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Given more time, I would have used the tags from the JSON to dynamically load related products */}
                <section class="relateproduct bgwhite p-t-45 p-b-138">
                    <div class="container">
                        <div class="sec-title p-b-60">
                            <h3 class="m-text5 t-center">
                                Related Products
                            </h3>
                        </div>

                        <div class="wrap-slick2">
                            <div class="slick2">

                                <div class="item-slick2 p-l-15 p-r-15">
                                    <div class="block2">
                                        <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                            <img src={require('../images/item-05.jpg')} alt="IMG-PRODUCT" />

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
                                            <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
                                                Herschel supply co 25l
                                            </a>

                                            <span class="block2-price m-text6 p-r-5">
                                                $75.00
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item-slick2 p-l-15 p-r-15">
                                    <div class="block2">
                                        <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                            <img src={require('../images/item-05.jpg')} alt="IMG-PRODUCT" />

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
                                            <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
                                                Denim jacket blue
                                            </a>

                                            <span class="block2-price m-text6 p-r-5">
                                                $92.50
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item-slick2 p-l-15 p-r-15">
                                    <div class="block2">
                                        <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                            <img src={require('../images/item-05.jpg')} alt="IMG-PRODUCT" />

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
                                            <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
                                                Coach slim easton black
                                            </a>

                                            <span class="block2-price m-text6 p-r-5">
                                                $165.90
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item-slick2 p-l-15 p-r-15">
                                    <div class="block2">
                                        <div class="block2-img wrap-pic-w of-hidden pos-relative">
                                            <img src={require('../images/item-05.jpg')} alt="IMG-PRODUCT" />

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
                                            <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
                                                Coach slim easton black
                                            </a>

                                            <span class="block2-price m-text6 p-r-5">
                                                $165.90
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );
    }
}

export default ProductDetail;