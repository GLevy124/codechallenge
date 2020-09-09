import React from 'react';
import Slider from 'react-rangeslider';

class PriceSlider extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            filterPrice: 500
        }
    }

    handleOnChange = (value) => {
        this.setState({
            filterPrice: value
        })
    }

    handleFilterPriceChange = () => {
        this.props.onFilterPriceChange(this.state.filterPrice);
    }

    render() {
        let { filterPrice } = this.state
        return (
            <div>
                <Slider
                    value={filterPrice}
                    min={0}
                    max={500}
                    orientation="horizontal"
                    onChange={this.handleOnChange}
                />
                <div class="flex-sb-m flex-w p-t-16">
                    <div class="w-size11">
                        <button class="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4" onClick={() => this.handleFilterPriceChange()}>
                            Filter
                        </button>
                    </div>

                    <div class="s-text3 p-t-10 p-b-10">
                        Max Price: $<span id="value-upper">{filterPrice}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceSlider;