package io.github.gmgessicamayara.vendasapi.repository.projections;

import java.math.BigDecimal;

public interface SaleByMonth {
    Integer getMonth();
    BigDecimal getTotal();
}
