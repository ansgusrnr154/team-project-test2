package com.egemmerce.hc.auction.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.auction.service.ReverseAuctionParticipantService;
import com.egemmerce.hc.repository.dto.ReverseAuctionParticipant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/ReverseAuctionParticipant")
@RequiredArgsConstructor
public class ReverseAuctionParticipantController {
	
	private final ReverseAuctionParticipantService reverseAuctionParticipantService;
	/* R :: 경매 내역 조회 */
	@GetMapping("/all")
	public ResponseEntity<List<ReverseAuctionParticipant>> selectByrapItemNo(int rapItemNo) throws Exception {
		return new ResponseEntity<List<ReverseAuctionParticipant>>(reverseAuctionParticipantService.findByrapItemNo(rapItemNo), HttpStatus.OK);
	}

}
