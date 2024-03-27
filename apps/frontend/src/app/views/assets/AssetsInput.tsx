import { useState, ChangeEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import hankHill from '../../images/dash/Hank_Hill.webp';
import HamburgerNav from '../../components/hamburger-nav/HamburgerNav';
import circlePlus from '../../images/logos/circlePlus.svg';
import upArrow from '../../images/logos/upArrow.svg';
import downArrow from '../../images/logos/downArrow.svg';
import circleI from '../../images/logos/circleI.svg';
import './assets.css';
import styles from '../../app.module.scss';

import { InfoTooltip } from './InfoTooltip';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { AssetContext,  } from './AssetContext';


interface Asset {
  id: string;
  asset: string;
  amount: number;
}

export const AssetsInput: React.FC<object> = (props: any) => {
  const navigate = useNavigate();
  // const { addNewAsset} = useContext(AssetContext) as AssetContextType;
  const [showInputForm, setShowInputForm] = useState<string>('');
  const [showCategoryDropdown, setShowCategoryDropdown] =
  useState<boolean>(false);
  const [inputs, setInputs] = useState<Asset>({ id: uuidv4(), asset: '', amount: 0 })
  const [value, setValue] = useState<number>(0);
 
  
  // const assetContext = useContext(AssetContext);
  // const [isOpen, setIsOpen] = useState<boolean>(false);




  // if (!assetContext) {
  //   // Handle case where context is undefined
  //   return null;

  // }
 

  // const { saveAssets } = assetContext as AssetContextType

  const saveAssets = (assets: Asset[]) => {
   console.log("asset saved! Or will be once we have the API route set up.")
  };
  

// console.log(assets)
//     interface AssetsInputProps {
//   saveAssets: (assets: Asset[]) => void; // Adjust the type of saveAssets function
// }
  
  const navigateToNewPage = () => {
    // console.log('new page');
    navigate('/assets/update');
  };

  const assetToast = () => {
    console.log('asset added');

    toast('Asset added', {
      position: 'top-center',
      icon: '👍',
      style: {
        borderRadius: '20px',
        backgroundColor: '#008000',
        color: 'white',
      },
    });
  };

  const handleUpButtonClick = (sectionName: string) => {
    //pops out input form based on the sectionName selected
    setShowInputForm(sectionName);
  };

  const handleAddAssetClick = (sectionName: string) => {
    const { id, asset, amount } = inputs;
    setValue(value + amount);
    console.log(inputs)
    console.log(asset)
    // addNewAsset({id, asset, amount})
    
    saveAssets([{ id, asset, amount}])
    setInputs({
      id: uuidv4(),
      asset: '',
      amount: 0,
      
    });
    assetToast();
    
  };



  const handleSelectCategory = (e: any) => {
    e.preventDefault();
    //populates drop down menu specific to the sectionName selected
    setShowCategoryDropdown((prevState) => !prevState);
    console.log('category selected!');
  };

  const handleUpdateAssets = () => {
    navigateToNewPage();
    //routes to slide to delete page
    //which lists all assets and allows them to be deleted
    //once deleted, they will be removed from the total (value) amount
    console.log('slide to delete page appears');
  };

  const handleDownArrowClick = (sectionName: string) => {
    //collapses the input form for the selected sectionName
    console.log('form collapses');
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  console.log(showCategoryDropdown);
  console.log(inputs);
 
  console.log(value);
  return (
    <div>
      <Toaster />
      <div>
        <div className="headline">
          <p className="p_headline">
            Let's get an understanding of your assets this month
          </p>
        </div>
        <div className="btn-container">
          <button className="asset_type_button">Select Asset Type</button>
        </div>
        <div className="asset_input_main_div">
          <hr className="horizontal_line"></hr>
          <div className="button-div">
            <p className="asset_p">Personal</p>
            <div className="button-and-form-container">
              <button onClick={() => handleUpButtonClick('personal')}>
                <img src={upArrow} alt="" className="add-button" />
              </button>
              <InfoTooltip
                data-html="true"
                tooltiptext=" * Property (your home, rental house, or 
             commercial property)

*	Classic cars
* Gold/jewelry/coins
*	Collectibles/art
*	Life insurance policies, etc"
                circleI={circleI}
              ></InfoTooltip>
              {showInputForm === 'personal' && (
                <div className="form-container">
                  <form className="asset-form">
                    <input
                      type="text"
                      className="asset-form-input"
                      name="asset"
                      placeholder="Asset Name"
                      value={inputs.asset}
                      onChange={(e) =>
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          asset: e.target.value,
                        }))
                      }
                    ></input>
                    <input
                      type="text"
                      className="asset-form-input"
                      name="amount"
                      placeholder="$00.00"
                      value={inputs.amount}
                      onChange={(e) =>
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          amount: parseFloat(e.target.value) || 0,
                        }))
                      }
                    ></input>
                    <button
                      className="asset-form-button"
                      onClick={handleSelectCategory}
                    >
                      Select Category
                    </button>
                    {showCategoryDropdown && (
                      <select
                        className="category-input"
                        name="personal-type"
                        onChange={handleChange}
                      >
                        <option value="property">Property</option>
                        <option value="cars">Classic Cars</option>
                        <option value="gold">Gold/Jewelry/Coins</option>
                        <option value="art">Collectibles/art</option>
                        <option value="insurance">
                          Life insurance policies
                        </option>
                      </select>
                    )}
                    <button
                      type="button"
                      onClick={() => handleAddAssetClick('personal')}
                    >
                      <img src={circlePlus} alt="" />
                    </button>
                    <button onClick={() => handleDownArrowClick('personal')}>
                      <img src={downArrow} alt="" className="add-button" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <hr className="horizontal_line"></hr>
          <div className="button-div">
            <p className="asset_p">Investable</p>
            <div className="button-and-form-container">
              <button onClick={() => handleUpButtonClick('investable')}>
                <img src={upArrow} alt="" className="add-button" />
              </button>
              <InfoTooltip
                data-html="true"
                tooltiptext="Stocks (blue chip, dividend paying, value, growth)
Bonds
Cash (money market funds, treasury bills, certificates of deposit [CDs])
Mutual funds
Index funds
Exchange traded funds (ETFs)
Annuities
Crypto
Derivatives (futures or options contracts, swaps)"
                circleI={circleI}
              ></InfoTooltip>

              {showInputForm === 'investable' && (
                <div className="form-container">
                  <form className="asset-form">
                    <input
                      type="text"
                      className="asset-form-input"
                      name="asset"
                      placeholder="Asset Name"
                      value={inputs.asset}
                      onChange={(e) =>
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          asset: e.target.value,
                        }))
                      }
                    ></input>
                    <input
                      type="text"
                      className="asset-form-input"
                      name="amount"
                      placeholder="$00.00"
                      value={inputs.amount}
                      onChange={(e) =>
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          amount: parseFloat(e.target.value) || 0,
                        }))
                      }
                    ></input>
                    <button
                      className="asset-form-button"
                      onClick={handleSelectCategory}
                    >
                      Select Category
                    </button>
                    {showCategoryDropdown && (
                      <select
                        className="category-input"
                        name="investable-type"
                        onChange={handleChange}
                      >
                        <option value="stocks">Stocks</option>
                        <option value="bonds">Bonds</option>
                        <option value="crypto">Crypto</option>
                        <option value="cash">Cash</option>
                        <option value="derivatives">Derivatives</option>
                      </select>
                    )}
                    <button
                      type="button"
                      onClick={() => handleAddAssetClick('investable')}
                    >
                      <img src={circlePlus} alt="" />
                    </button>
                    <button onClick={() => handleDownArrowClick('investable')}>
                      <img src={downArrow} alt="" className="add-button" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <hr className="horizontal_line"></hr>
          <div className="button-div">
            <p className="asset_p">Non-Investable</p>
            <div className="button-and-form-container">
              <button onClick={() => handleUpButtonClick('non-investable')}>
                <img src={upArrow} alt="" className="add-button" />
              </button>
              <InfoTooltip
                data-html="true" 
                tooltiptext="Real estate or factory equipment
Intellectual property (copyrighted or patented material)
Retirement accounts"
                circleI={circleI}
              ></InfoTooltip>

              {showInputForm === 'non-investable' && (
                <div className="form-container">
                  <form className="asset-form">
                    <input
                      type="text"
                      className="asset-form-input"
                      name="asset"
                      placeholder="Asset Name"
                      value={inputs.asset}
                      onChange={(e) =>
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          asset: e.target.value,
                        }))
                      }
                    ></input>
                    <input
                      type="text"
                      className="asset-form-input"
                      name="amount"
                      placeholder="$00.00"
                      value={inputs.amount}
                      onChange={(e) =>
                        setInputs((prevInputs) => ({
                          ...prevInputs,
                          amount: parseFloat(e.target.value) || 0,
                        }))
                      }
                    ></input>
                    <button
                      className="asset-form-button"
                      onClick={handleSelectCategory}
                    >
                      Select Category
                    </button>
                    {showCategoryDropdown && (
                      <select
                        className="category-input"
                        name="non-investable-type"
                        onChange={handleChange}
                      >
                        <option value="realestate">
                          Real estate or factory equipment
                        </option>
                        <option value="intellectual">
                          Intellectual property
                        </option>
                        <option value="retirement">Retirement account</option>
                      </select>
                    )}
                    <button
                      type="button"
                      onClick={() => handleAddAssetClick('non-investable')}
                    >
                      <img src={circlePlus} alt="" />
                    </button>
                    <button
                      onClick={() => handleDownArrowClick('non-investable')}
                    >
                      <img src={downArrow} alt="" className="add-button" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <hr className="horizontal_line"></hr>
          <div className="value_div">
            <p className="asset_p_value">Value: {value}.00</p>
          </div>
          <button
            className="asset_button_large"
            onClick={() =>
              console.log("retrieved last month's data from database!")
            }
          >
            Use Last Month
          </button>
          <button className="asset_button_large" onClick={handleUpdateAssets}>
            Update Assets
          </button>
        </div>
      </div>
    </div>
  );
};
