import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductImage from '../../components/itemBuy/ProductImage';

import ProductName from '../../components/itemBuy/ProductName';
import ProductCategory from '../../components/itemBuy/ProductCategory';
import DealRegion from '../../components/itemBuy/DealRegion';
// import ProductState from '../../components/itemBuy/ProductState';
import ProductPrice from '../../components/itemBuy/ProductPrice';
import ProductDescription from '../../components/productRegistration/ProductDescription';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import axios from 'axios';
import { ImageListType } from 'react-images-uploading';
import { useHistory } from 'react-router-dom';

const RegistButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #ff6600;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
const Container = styled.div`
  text-align: center;
  padding: 196px 200px 0 200px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    padding: 196px 40px 0 40px;
  }
`;
const ItemBuy = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const history = useHistory();

  const [productData, setProductData] = useState({
    ibUserNo: 0,
    ibName: '',
    ibCategoryMain: '',
    ibCategorySub: '',
    ibContent: '',
    ibEndDate: '',
    ibCoolPrice: 0,
    ibAuctionIngPrice: 0,
    ibAuctionInitPrice: 0,
    ibDealAddress: -1,
  });
  const [productPhoto, setProductPhoto] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (userData.uNo) {
      setProductData({ ...productData, ibUserNo: userData.uNo });
    } else {
      window.location.href = '/home';
    }
  }, []);

  const onIsNameHandler = (name: any) => {
    setProductData({ ...productData, ibName: name });
  };
  const onIsRegionHandler = (address: any) => {
    setProductData({ ...productData, ibDealAddress: address });
  };
  const onIsCategoryMain = (categoryMain: any) => {
    setProductData({ ...productData, ibCategoryMain: categoryMain });
  };
  const onIsCategorySub = (categorySub: any) => {
    setProductData({ ...productData, ibCategorySub: categorySub });
  };
  const onIsContent = (content: any) => {
    setProductData({ ...productData, ibContent: content });
  };
  const onIsEndDate = (endDate: any) => {
    setProductData({ ...productData, ibEndDate: endDate });
  };
  const onIsCoolPrice = (coolPrice: any) => {
    let price = Math.floor(Number(coolPrice) / 100) * 100;
    setProductData({ ...productData, ibCoolPrice: price });
  };
  const onIsAuctionPrice = (auctionPrice: any) => {
    let price = Math.floor(Number(auctionPrice) / 100) * 100;
    setProductData({
      ...productData,
      ibAuctionIngPrice: price,
      ibAuctionInitPrice: price,
    });
  };

  const onisProductPhoto = (photoList: any) => {
    setProductPhoto(photoList);
  };

  const onRegist = () => {
    console.log('regist');
    let body = productData;
    console.log(body);

    if (
      productData.ibUserNo &&
      productData.ibName &&
      productData.ibCategoryMain &&
      productData.ibEndDate &&
      productData.ibCoolPrice &&
      productData.ibAuctionIngPrice &&
      productData.ibAuctionInitPrice &&
      productData.ibDealAddress
    ) {
      console.log('data다있음');
      if (productPhoto.length > 0) {
        console.log(body);
        axios
          .post(
            'https://k4d107.p.ssafy.io/haggle-credit/itemBuy/regist',
            body,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            console.log(res);
            uploadImage(productPhoto, res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return;
      }
    } else {
      return;
    }
  };
  const uploadImage = (imageList: ImageListType, res: any) => {
    const ibItemNo = res.data.ibItemNo;
    console.log(ibItemNo);
    for (let i = 0; i < imageList.length; i++) {
      console.log(imageList[i]);
      const body2 = {
        ipItemNo: ibItemNo,
        ipValue: imageList[i].dataURL,
      };
      axios
        .post(
          'https://k4d107.p.ssafy.io/haggle-credit/image/itemPhotoUpload',
          body2,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert('구매글을 등록하였습니다.');
          history.push('/home');
        })
        .catch((err) => {
          console.log(err);
          alert('구매글 등록을 실패하였습니다.');
        });
    }
  };
  return (
    <>
      <Container>
        <div>
          <div
            id="header"
            style={{
              height: '4.5vw',
              display: 'flex',
              borderBottom: '0.1vw solid black',
            }}
          >
            <div
              style={{ fontSize: '1.25vw', width: '7.5vw', fontWeight: 500 }}
            >
              <p>구매글</p>
            </div>
            <div
              style={{
                position: 'relative',
                fontWeight: 500,
                marginTop: '0.75vw',
              }}
            >
              <p style={{ color: 'red', fontSize: '0.75vw' }}>
                <span>*</span>필수항목
              </p>
            </div>
          </div>
          <ProductImage onisProductPhoto={onisProductPhoto} />

          <ProductName onIsNameHandler={onIsNameHandler} />
          <ProductCategory
            onIsCategoryMain={onIsCategoryMain}
            onIsCategorySub={onIsCategorySub}
          />
          <DealRegion onIsRegionHandler={onIsRegionHandler} />
          <ProductPrice
            onIsCoolPrice={onIsCoolPrice}
            onIsAuctionPrice={onIsAuctionPrice}
            onIsEndDate={onIsEndDate}
          />
          <ProductDescription onIsContent={onIsContent} />

          {/* <div
          id="address"
          style={{
            display: 'flex',
            padding: '25px 0',
            borderBottom: '1px solid gray',
            marginBottom: '100px',
          }}
        >
          <div
            style={{
              width: '180px',
              fontSize: '17px',
              fontWeight: 'bolder',
            }}
          >
            <p>
              교환<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div>
                <Radio
                  id="radio1"
                  checked={changeSelectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <span>교환가능</span>
              </div>
              <div>
                <Radio
                  id="radio1"
                  checked={changeSelectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
                <span>교환불가</span>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div
          id="address"
          style={{
            display: 'flex',
            padding: '25px 0',
            borderBottom: '1px solid gray',
          }}
        >
          <div
            style={{
              width: '180px',
              fontSize: '17px',
              fontWeight: 'bolder',
            }}
          >
            <p>연관태그</p>
          </div>
          <div>
            <input
              style={{
                height: '40px',
                width: '800px',
                marginRight: '25px',
              }}
              placeholder="연관태그를 입력해주세요.(최대 5개)"
            ></input>
            <div
              style={{
                fontSize: '13px',
                marginTop: '5px',
              }}
            >
              <span>
                - 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.
              </span>
              <br />
              <span>
                - 태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을
                보장하지는 않습니다.
              </span>
              <br />
              <span>- 검색 광고는 태그정보를 기준으로 노출됩니다.</span>
              <br />
              <span>
                - 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드
                등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.
              </span>
            </div>
          </div>
        </div> */}
          {/* <div
          id="address"
          style={{
            display: 'flex',
            padding: '25px 0',
            marginBottom: '100px',
          }}
        >
          <div
            style={{
              width: '180px',
              fontSize: '17px',
              fontWeight: 'bolder',
            }}
          >
            <p>수량</p>
          </div>
          <div>
            <input
              value="1"
              style={{
                height: '20px',
                padding: '10px',
                marginTop: '5px',
              }}
            ></input>{' '}
            개
          </div>
        </div> */}
        </div>
      </Container>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '10px 0',
          // backgroundColor: 'rgb(250, 250, 253)',
          position: 'fixed',
          backgroundColor: 'white',
          bottom: '10px',
        }}
      >
        <RegistButton onClick={onRegist}>등록하기</RegistButton>
      </div>
    </>
  );
};

export default ItemBuy;
