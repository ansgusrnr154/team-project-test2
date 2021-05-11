package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.mapper.ItemSellRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemSellServiceImpl implements ItemSellService {

	private final ItemSellRepository itemSellRepository;
	/* C :: 상품 등록 */
	@Override
	public ItemSell insertItemSell(ItemSell itemSell) {
		return itemSellRepository.save(itemSell);
	}
	
	/* R :: 상품 전체 조회 */
	@Override
	public 	List<ItemSell> selectItemSellAll() {
		return itemSellRepository.findAll();
	}

	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItemSell(int isItemNo) {
		itemSellRepository.delete(itemSellRepository.findByisItemNo(isItemNo));
		if(itemSellRepository.findByisItemNo(isItemNo)==null) {
			return true;
		}
		return false;
	}

	@Override
	public List<ItemSell> selectItemSellByisName(String isName, Pageable pageable) {
		return itemSellRepository.findByisNameContaining(isName, pageable);
	}

	/*상품 업데이트*/
	@Override
	public ItemSell updateItemSell(ItemSell itemSell) {
		return itemSellRepository.save(itemSell);
	}
}
