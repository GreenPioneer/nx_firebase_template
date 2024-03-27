import React, { createContext, useState, useEffect, useContext  } from "react"
import axios from "axios";



interface Asset {
    id: string;
    asset: string;
    amount: number;
  }
interface AssetContextType {
    assets: Asset[];
    setAssets: React.Dispatch<React.SetStateAction<Asset[]>>;
    addNewAsset: (newAsset: Asset) => void;
    saveAssets: (assets: Asset[]) => void;
    removeAsset: (asset: Asset) => void;
    getAllAssets: () => void;
  }

export const AssetContext = createContext<AssetContextType | undefined>(undefined)


export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [assets, setAssets] = useState<Asset[]>([]);
  
    const addNewAsset = (newAsset: Asset) => {
        return setAssets((prev: Asset[]) => {
          const newAssets: Asset[] = [...prev, newAsset];
          setAssets(newAssets);
          saveAssets(newAssets);
          console.log(newAssets);
          return newAssets;
        });
      };
  
      const saveAssets = (assets: Asset[]) => {
        try {
          localStorage.setItem('assets', JSON.stringify(assets));
        } catch (err) {
          console.error('error saving to local storage', err);
        }
      };

      const removeAsset = (asset: Asset) =>
        setAssets((prev) => {
          const newAssets = prev.filter((as) => as.id !== asset.id);
          saveAssets(newAssets);
          console.log('deleted asset');
          return newAssets;
        });

      const getAllAssets = () => {
        try {
          const storedAssetsString: string | null =
            localStorage.getItem('assets');

          if (storedAssetsString !== null) {
            const storedAssets: Asset[] | Asset =
              JSON.parse(storedAssetsString);

            if (Array.isArray(storedAssets)) {
              setAssets(storedAssets);
            } else {
              setAssets([storedAssets]);
              console.log('not saved');
            }
          }
        } catch (err) {
          console.error(err);
        }
      };

 




      useEffect(() => {
        getAllAssets();
      }, []);

      // type AssetContextType = {
      //   assets,
      //   setAssets,
      //   addNewAsset,
      //   saveAssets,
      //   removeAsset,
      //   getAllAssets,
      // };

     

      return (
    //     <AssetContext.Provider >
    //     {children}
    // </AssetContext.Provider>

    <div>
      <h1>test</h1>
    </div>
      )
    }

