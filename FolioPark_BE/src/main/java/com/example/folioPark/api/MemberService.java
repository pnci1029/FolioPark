package com.example.folioPark.api;

import com.example.folioPark.domain.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service @RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
}
