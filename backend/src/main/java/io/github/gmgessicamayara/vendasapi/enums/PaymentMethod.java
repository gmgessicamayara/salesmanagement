package io.github.gmgessicamayara.vendasapi.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum PaymentMethod {
    MONEY("Money"),
    DEBIT_CARD("Debit Card"),
    CREDIT_CARD("Credit Card");

    private final String value;

    PaymentMethod(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

}