package io.github.gmgessicamayara.vendasapi.rest.dashboard;

import io.github.gmgessicamayara.vendasapi.repository.projections.SaleByMonth;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.OptionalInt;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Getter
@Setter
public class DashboardData {
    private Long sales;
    private Long products;
    private Long customers;
    private List<SaleByMonth> salesByMonth;

    public void fillMonthsWithoutSales() {
        if (salesByMonth != null && !salesByMonth.isEmpty()) {
            OptionalInt optionalMax = getSalesByMonth().stream()
                    .mapToInt(SaleByMonth::getMonth)
                    .max();

            if (optionalMax.isPresent()) {
                int maxMonth = optionalMax.getAsInt();

                List<Integer> months = IntStream.rangeClosed(1, maxMonth)
                        .boxed()
                        .collect(Collectors.toList());

                List<Integer> monthsAdded = getSalesByMonth().stream()
                        .map(SaleByMonth::getMonth)
                        .collect(Collectors.toList());

                months.stream()
                        .filter(month -> !monthsAdded.contains(month))
                        .map(month -> new SaleByMonth() {
                            @Override
                            public Integer getMonth() {
                                return month;
                            }

                            @Override
                            public BigDecimal getTotal() {
                                return BigDecimal.ZERO;
                            }
                        })
                        .forEach(sale -> getSalesByMonth().add(sale));

                getSalesByMonth().sort(Comparator.comparing(SaleByMonth::getMonth));
            }
        }
    }

    public DashboardData( Long sales, Long products, Long customers, List<SaleByMonth> salesByMonth) {
        super();
        this.products = products;
        this.sales = sales;
        this.customers = customers;
        this.salesByMonth = salesByMonth;
        this.fillMonthsWithoutSales();
    }
}

