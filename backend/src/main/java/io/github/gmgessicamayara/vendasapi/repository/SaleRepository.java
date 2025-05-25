package io.github.gmgessicamayara.vendasapi.repository;

import io.github.gmgessicamayara.vendasapi.model.Sale;
import io.github.gmgessicamayara.vendasapi.repository.projections.SaleByMonth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query(value = "select extract(month from tb_sale.p_registration_date) as month, sum(tb_sale.p_total_price) as total "
            + "from tb_sale "
            + "where extract(year from tb_sale.p_registration_date) = :year "
            + "group by extract(month from tb_sale.p_registration_date)",
            nativeQuery = true)
    List<SaleByMonth> getMonthlySalesTotal(@Param("year") Integer year);


}
