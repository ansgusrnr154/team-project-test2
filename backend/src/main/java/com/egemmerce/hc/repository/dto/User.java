package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "uNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

	@Id
	private int uNo;
	private String uEmail;
	private String uPassword;
	private String uName;
	private String uPhone;
	private Date uBirth;
	private LocalDateTime uJoinDate;

	@ColumnDefault("client")
	private String uAuthority;

	@ColumnDefault("0")
	private int uCredit;

	@ColumnDefault("false")
	private String uPenalty;

	@ColumnDefault("false")
	private String uSellerAuth;

	private String uJoinConfirm;
	private String uBankName;
	private String uBankNo;
	private String uAuthKey;
	private String uImage;
	private LocalDateTime uAuthKeyGeneratedAt;

	public void generateEuAuthKey() {
		this.uAuthKey = UUID.randomUUID().toString();
		this.uAuthKeyGeneratedAt = LocalDateTime.now();
		this.uJoinDate = LocalDateTime.now();
	}

	public int getuNo() {
		return uNo;
	}

	public void setuNo(int uNo) {
		this.uNo = uNo;
	}

	public String getuAuthority() {
		return uAuthority;
	}

	public void setuAuthority(String uAuthority) {
		this.uAuthority = uAuthority;
	}

	public String getuEmail() {
		return uEmail;
	}

	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}

	public String getuPassword() {
		return uPassword;
	}

	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}

	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	public String getuPhone() {
		return uPhone;
	}

	public void setuPhone(String uPhone) {
		this.uPhone = uPhone;
	}

	public String getuSellerAuth() {
		return uSellerAuth;
	}

	public void setuSellerAuth(String uSellerAuth) {
		this.uSellerAuth = uSellerAuth;
	}

	public String getuAuthKey() {
		return uAuthKey;
	}

	public void setuAuthKey(String uAuthKey) {
		this.uAuthKey = uAuthKey;
	}

	public int getuCredit() {
		return uCredit;
	}

	public void setuCredit(int uCredit) {
		this.uCredit = uCredit;
	}

	public String getuPenalty() {
		return uPenalty;
	}

	public void setuPenalty(String uPenalty) {
		this.uPenalty = uPenalty;
	}

	public LocalDateTime getuAuthKeyGeneratedAt() {
		return uAuthKeyGeneratedAt;
	}

	public void setuAuthKeyGeneratedAt(LocalDateTime uAuthKeyGeneratedAt) {
		this.uAuthKeyGeneratedAt = uAuthKeyGeneratedAt;
	}

	public LocalDateTime getuJoinDate() {
		return uJoinDate;
	}

	public void setuJoinDate(LocalDateTime uJoinDate) {
		this.uJoinDate = uJoinDate;
	}

	public String getuJoinConfirm() {
		return uJoinConfirm;
	}

	public void setuJoinConfirm(String uJoinConfirm) {
		this.uJoinConfirm = uJoinConfirm;
	}

	public Date getuBirth() {
		return uBirth;
	}

	public void setuBirth(Date uBirth) {
		this.uBirth = uBirth;
	}

	public String getuBankName() {
		return uBankName;
	}

	public void setuBankName(String uBankName) {
		this.uBankName = uBankName;
	}

	public String getuBankNo() {
		return uBankNo;
	}

	public void setuBankNo(String uBankNo) {
		this.uBankNo = uBankNo;
	}

	public String getuImage() {
		return uImage;
	}

	public void setuImage(String uImage) {
		this.uImage = uImage;
	}

}
